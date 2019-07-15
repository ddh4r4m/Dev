const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const jwt = require('jsonwebtoken');
const config = require('config');
const crypto = require('crypto');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

require('dotenv').config();
const nodemailer = require('nodemailer');

const { check, validationResult } = require('express-validator/check');
//import user Model
const User = require('../../models/User');
const bcrypt = require('bcryptjs');

//@route    GET api/users
//@desc     Test Route
//@access   Public
router.post(
  '/',
  [
    check('name', 'Name is required')
      .not()
      .isEmpty(),
    check('email', 'Please include a Valid Email ').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    // console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password, role } = req.body;
    try {
      //See if User Exits
      let user = await User.findOne({ email });

      if (user) {
        res.status(400).json({ errors: [{ msg: 'User already exists' }] });
      }
      // Get users gravatar
      const avatar = gravatar.url(email, {
        s: '200',
        r: 'pg',
        d: 'mm'
      });

      user = new User({
        name,
        email,
        avatar,
        password,
        role
      });
      // Encrypt password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      //Save User to Database
      await user.save();
      // Return JsonWebtoken
      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

//Newly added check for errors
router.delete('/', async (req, res) => {
  try {
    //Remove Profile
    // await User.findOneAndRemove({ user: req.user.id });
    //Remove User
    await User.findOneAndRemove({ _id: req.body.id });
    res.status(200).send('User Removed');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//Get
router.get('/', async (req, res) => {
  try {
    const user = await User.find();
    res.json(user);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send('Server Error');
  }
});

//Reset Password
router.post('/forgotPassword', (req, res) => {
  if (req.body.email === '') {
    res.status(400).send('email required');
  }
  console.error(req.body.email);
  User.findOne({
    email: req.body.email
  }).then(user => {
    if (user === null) {
      console.error('email not in database');
      res.status(403).send('email not in db');
    } else {
      const token = crypto.randomBytes(20).toString('hex');
      // user.update(
      //   { _id: user._id },
      //   {
      //     $set: {
      //       resetPasswordToken: token,
      //       resetPasswordExpires: Date.now() + 360000
      //     }
      //   }
      // );
      const ddate = Date.now() + 360000;
      User.findOneAndUpdate(
        { email: req.body.email },
        {
          resetPasswordToken: token,
          resetPasswordExpires: Date.now() + 3600000
        },
        { upsert: true },
        function(err, doc) {
          if (err) return res.send(500, { error: err });
          return res.send('succesfully saved');
        }
      );

      console.log(ddate);
      console.log(user._id);
      console.log(user);
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: `${process.env.EMAIL_ADDRESS}`,
          pass: `${process.env.EMAIL_PASSWORD}`
        }
      });

      const mailOptions = {
        from: 'mySqlDemoEmail@gmail.com',
        to: `${user.email}`,
        subject: 'Link To Reset Password',
        text:
          'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
          'Please click on the following link, or paste this into your browser to complete the process within one hour of receiving it:\n\n' +
          `http://localhost:3000/reset/${token}\n\n` +
          'If you did not request this, please ignore this email and your password will remain unchanged.. \n'
      };

      console.log('sending mail');

      transporter.sendMail(mailOptions, (err, response) => {
        if (err) {
          console.error('there was an error: ', err);
        } else {
          console.log('here is the res: ', response);
          res.status(200).json('recovery email sent');
        }
      });
    }
  });
});

router.get('/reset', (req, res) => {
  console.log(req.query.resetPasswordToken);
  User.findOne({
    resetPasswordToken: req.query.resetPasswordToken
    // resetPasswordExpires: {
    //   [Op.gt]: Date.now()
    // }
  }).then(user => {
    console.log(user);
    if (user === null) {
      console.error('password reset link is invalid or has expired');
      res.status(403).send('password reset link is invalid or has expired');
    } else {
      res.status(200).send({
        email: user.email,
        message: 'password reset link a-ok'
      });
    }
  });
});

const BCRYPT_SALT_ROUNDS = 12;

router.put('/updatePasswordViaEmail', (req, res) => {
  User.findOne({
    // email: req.body.email,
    resetPasswordToken: req.body.resetPasswordToken
    // resetPasswordExpires: {
    //   [Op.gt]: Date.now()
    // }
  }).then(user => {
    if (user === null) {
      // console.log(req.body.email);
      console.error('password reset link is invalid or has expired');
      res.status(403).send('password reset link is invalid or has expired');
    } else if (user != null) {
      console.log('user exists in db');
      // console.log(req.body.email, req.body.password);
      bcrypt
        .hash(req.body.password, BCRYPT_SALT_ROUNDS)
        .then(hashedPassword => {
          // user.update({
          //   password: hashedPassword,
          //   resetPasswordToken: null,
          //   resetPasswordExpires: null
          // });
          User.findOneAndUpdate(
            { email: req.body.email },
            {
              password: hashedPassword,
              resetPasswordToken: null,
              resetPasswordExpires: null
            },
            { upsert: true },
            function(err, doc) {
              if (err) {
                return res.send(500, { error: err });
              } else {
                return res.send('succesfully saved');
              }
            }
          );
        })
        .then(() => {
          console.log('password updated');
          res.status(200).send({ message: 'password updated' });
        });
    } else {
      console.error('no user exists in db to update');
      res.status(401).json('no user exists in db to update');
    }
  });
});

module.exports = router;
