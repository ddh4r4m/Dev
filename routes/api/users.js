const express =require('express');
const router = express.Router();
const gravatar = require('gravatar');
const jwt = require('jsonwebtoken');
const config = require('config')
const { check, validationResult } = require('express-validator/check');
//import user Model
const User = require('../../models/User');
const bcrypt = require('bcryptjs');

//@route    GET api/users
//@desc     Test Route
//@access   Public
router.post('/',[
    check('name','Name is required').not().isEmpty(),
    check('email', 'Please include a Valid Email ').isEmail(),
    check('password','Please enter a password with 6 or more characters').isLength({min : 6})
],
async (req,res)=> {
    // console.log(req.body);
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors : errors.array()});
    }
        
        const { name, email, password } = req.body;
        try{
        //See if User Exits
        let user = await User.findOne({email});

        if(user){
            res.status(400).json({errors:[{msg:'User already exists'}]});
        }
        // Get users gravatar
        const avatar=gravatar.url(email,{
            s:'200',
            r:'pg',
            d:'mm'
        })

        user = new User({
            name,
            email,
            avatar,
            password
        });
        // Encrypt password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password,salt);
        //Save User to Database
        await user.save();
        // Return JsonWebtoken
        const payload = {
            user : {
                id : user.id
            }
        }

        jwt.sign(
            payload, 
            config.get('jwtSecret'),
            {expiresIn:3600},
            (err, token)=>{
                if(err) throw err;
                res.json({ token });
            });
        }catch(err){
            console.error(err.message);
            res.status(500).send('Server error');
        }
    });

module.exports = router;