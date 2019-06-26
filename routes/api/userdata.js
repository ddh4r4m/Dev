const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const auth = require('../../middleware/auth');

const Userdata = require('../../models/Userdata');
const Profile = require('../../models/Profile');
const User = require('../../models/User');

const multer = require('multer');
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads');
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === 'image/jpeg' ||
    file.mimetype === 'image/png' ||
    file.mimetype === 'application/pdf'
  ) {
    cb(null, true);
  } else {
    cb(new Error('Only .jpeg or .png or pdf files are accepted'), false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 6
  },
  fileFilter: fileFilter
});

var cpUpload = upload.fields([
  { name: 'docImage', maxCount: 1 },
  { name: 'doccImage', maxCount: 1 },
  { name: 'medicalreport', maxCount: 1 },
  { name: 'postmortem', maxCount: 1 },
  { name: 'abcSummary', maxCount: 1 },
  { name: 'victimone', maxCount: 1 },
  { name: 'victimtwo', maxCount: 1 },
  { name: 'victimthree', maxCount: 1 },
  { name: 'victimfour', maxCount: 1 },
  { name: 'victimfive', maxCount: 1 },
  { name: 'accusedone', maxCount: 1 },
  { name: 'accusedtwo', maxCount: 1 },
  { name: 'accusedthree', maxCount: 1 },
  { name: 'accusedfour', maxCount: 1 },
  { name: 'accusedfive', maxCount: 1 }
]);
//@route    POST api/posts
//@desc     Create a post
//@access   Private
router.post(
  '/',
  cpUpload,
  [
    auth,
    [
      check('text', 'Serial No is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array });
    }

    try {
      // console.log(req.body);
      const user = await User.findById(req.user.id).select('-password');
      const newUserdata = new Userdata({
        text: req.body.text,
        year: req.body.year,
        docImage:
          req.files['docImage'] == undefined
            ? ''
            : req.files['docImage'][0].path,
        doccImage:
          req.files['doccImage'] == undefined
            ? ''
            : req.files['doccImage'][0].path,
        postmortem:
          req.files['postmortem'] == undefined
            ? ''
            : req.files['postmortem'][0].path,
        medicalreport:
          req.files['medicalreport'] == undefined
            ? ''
            : req.files['medicalreport'][0].path,
        abcSummary:
          req.files['abcSummary'] == undefined
            ? ''
            : req.files['abcSummary'][0].path,
        victimone:
          req.files['victimone'] == undefined
            ? ''
            : req.files['victimone'][0].path,
        victimtwo:
          req.files['victimtwo'] == undefined
            ? ''
            : req.files['victimtwo'][0].path,
        victimthree:
          req.files['victimthree'] == undefined
            ? ''
            : req.files['victimthree'][0].path,
        victimfour:
          req.files['victimfour'] == undefined
            ? ''
            : req.files['victimfour'][0].path,
        victimfive:
          req.files['victimfive'] == undefined
            ? ''
            : req.files['victimfive'][0].path,
        accusedone:
          req.files['accusedone'] == undefined
            ? ''
            : req.files['accusedone'][0].path,
        accusedtwo:
          req.files['accusedtwo'] == undefined
            ? ''
            : req.files['accusedtwo'][0].path,
        accusedthree:
          req.files['accusedthree'] == undefined
            ? ''
            : req.files['accusedthree'][0].path,
        accusedfour:
          req.files['accusedfour'] == undefined
            ? ''
            : req.files['accusedfour'][0].path,
        accusedfive:
          req.files['accusedfive'] == undefined
            ? ''
            : req.files['accusedfive'][0].path,
        disabledata: req.body.disabledata,
        closecase: req.body.closecase,
        closethecase: req.body.closethecase,
        typeofatrocity: req.body.typeofatrocity,
        ipcapplied: req.body.ipcapplied,
        sectionsapplied: req.body.sectionsapplied,
        policestation: req.body.policestation,
        crimeregisterno: req.body.crimeregisterno,
        dateofcrime: req.body.dateofcrime,
        regdateofcrime: req.body.regdateofcrime,
        firstbenefitbypolice: req.body.firstbenefitbypolice,
        firstbenefitbycommis: req.body.firstbenefitbycommis,
        firstbenefitbycollector: req.body.firstbenefitbycollector,
        firstbenefitbypolicecomment: req.body.firstbenefitbypolicecomment,
        firstbenefitbycommcomment: req.body.firstbenefitbycommcomment,
        firstbenefitbycollectorcomment: req.body.firstbenefitbycollectorcomment,
        secondbenefitbypolice: req.body.secondbenefitbypolice,
        secondbenefitbycommis: req.body.secondbenefitbycommis,
        secondbenefitbycollector: req.body.secondbenefitbycollector,
        secondbenefitbypolicecomment: req.body.secondbenefitbypolicecomment,
        secondbenefitbycommcomment: req.body.secondbenefitbycommcomment,
        secondbenefitbycollectorcomment:
          req.body.secondbenefitbycollectorcomment,
        thirdbenefitbypolice: req.body.thirdbenefitbypolice,
        thirdbenefitbycommis: req.body.thirdbenefitbycommis,
        thirdbenefitbycollector: req.body.thirdbenefitbycollector,
        thirdbenefitbypolicecomment: req.body.thirdbenefitbypolicecomment,
        thirdbenefitbycommcomment: req.body.thirdbenefitbycommcomment,
        thirdbenefitbycollectorcomment: req.body.thirdbenefitbycollectorcomment,
        victimdetails: req.body.victimdetails,
        natureofcrime: req.body.natureofcrime,
        sections: req.body.sections,
        chargesheetdate: req.body.chargesheetdate,
        policeinvestigation: req.body.policeinvestigation,
        courtresults: req.body.courtresults,
        financialsupport: req.body.financialsupport,
        dateofcourtorder: req.body.dateofcourtorder,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id
      });

      const post = await newUserdata.save();
      res.json(post);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server Error');
    }
  }
);
//@route    GET api/posts
//@desc     Get all posts
//@access   Private

router.get('/', async (req, res) => {
  try {
    const userdata = await Userdata.find().sort({ date: -1 });
    res.json(userdata);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send('Server Error');
  }
});
//@route    GET api/posts/:id
//@desc     Get posts by id
//@access   Private

router.get('/:id', auth, async (req, res) => {
  try {
    const userdata = await Userdata.findById(req.params.id);

    if (!userdata) {
      return res.status(404).json({ msg: 'userdata not found' });
    }

    res.json(userdata);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Userdata not found' });
    }
    return res.status(500).send('Server Error');
  }
});

//@route    GET api/posts/:id
//@desc     Get posts by id
//@access   Private

router.put('/:id', cpUpload, auth, async (req, res) => {
  try {
    const userdata = await Userdata.findById(req.params.id);

    if (!userdata) {
      return res.status(404).json({ msg: 'userdata not found' });
    } else {
      userdata.text = req.body.text;
      userdata.year = req.body.year;
      userdata.disabledata = req.body.disabledata;
      userdata.closecase = req.body.closecase;
      userdata.closethecase = req.body.closethecase;

      // console.log(req.files['docImage'] !== undefined);
      if (req.files['docImage'] !== undefined) {
        userdata.docImage = req.files['docImage'][0].path;
      }
      if (req.files['doccImage'] !== undefined) {
        userdata.doccImage = req.files['doccImage'][0].path;
      }
      if (req.files['postmortem'] !== undefined) {
        userdata.postmortem = req.files['postmortem'][0].path;
      }
      if (req.files['medicalreport'] !== undefined) {
        userdata.medicalreport = req.files['medicalreport'][0].path;
      }
      if (req.files['abcSummary'] !== undefined) {
        userdata.abcSummary = req.files['abcSummary'][0].path;
      }
      if (req.files['victimone'] !== undefined) {
        userdata.victimone = req.files['victimone'][0].path;
      }
      if (req.files['victimtwo'] !== undefined) {
        userdata.victimtwo = req.files['victimtwo'][0].path;
      }
      if (req.files['victimthree'] !== undefined) {
        userdata.victimthree = req.files['victimthree'][0].path;
      }
      if (req.files['victimfour'] !== undefined) {
        userdata.victimfour = req.files['victimfour'][0].path;
      }
      if (req.files['victimfive'] !== undefined) {
        userdata.victimfive = req.files['victimfive'][0].path;
      }
      if (req.files['accusedone'] !== undefined) {
        userdata.accusedone = req.files['accusedone'][0].path;
      }
      if (req.files['accusedtwo'] !== undefined) {
        userdata.accusedtwo = req.files['accusedtwo'][0].path;
      }
      if (req.files['accusedthree'] !== undefined) {
        userdata.accusedthree = req.files['accusedthree'][0].path;
      }
      if (req.files['accusedfour'] !== undefined) {
        userdata.accusedfour = req.files['accusedfour'][0].path;
      }
      if (req.files['accusedfive'] !== undefined) {
        userdata.accusedfive = req.files['accusedfive'][0].path;
      }

      // if (!req.files) {
      //   userdata.docImage = req.files['docImage'][0].path;
      //   userdata.doccImage = req.files['doccImage'][0].path;
      //   userdata.victimone = req.files['victimone'][0].path;
      //   userdata.victimtwo = req.files['victimtwo'][0].path;
      //   userdata.victimthree = req.files['victimthree'][0].path;
      //   userdata.victimfour = req.files['victimfour'][0].path;
      //   userdata.victimfive = req.files['victimfive'][0].path;
      //   userdata.accusedone = req.files['accusedone'][0].path;
      //   userdata.accusedtwo = req.files['accusedtwo'][0].path;
      //   userdata.accusedthree = req.files['accusedthree'][0].path;
      //   userdata.accusedfour = req.files['accusedfour'][0].path;
      //   userdata.accusedfive = req.files['accusedfive'][0].path;
      // }
      userdata.typeofatrocity = req.body.typeofatrocity;
      userdata.ipcapplied = req.body.ipcapplied;
      userdata.sectionsapplied = req.body.sectionsapplied;
      userdata.policestation = req.body.policestation;
      userdata.crimeregisterno = req.body.crimeregisterno;
      userdata.dateofcrime = req.body.dateofcrime;
      userdata.regdateofcrime = req.body.regdateofcrime;
      userdata.firstbenefitbypolice = req.body.firstbenefitbypolice;
      userdata.firstbenefitbycommis = req.body.firstbenefitbycommis;
      userdata.firstbenefitbycollector = req.body.firstbenefitbycollector;
      userdata.firstbenefitbypolicecomment =
        req.body.firstbenefitbypolicecomment;
      userdata.firstbenefitbycommcomment = req.body.firstbenefitbycommcomment;
      userdata.firstbenefitbycollectorcomment =
        req.body.firstbenefitbycollectorcomment;
      userdata.secondbenefitbypolice = req.body.secondbenefitbypolice;
      userdata.secondbenefitbycommis = req.body.secondbenefitbycommis;
      userdata.secondbenefitbycollector = req.body.secondbenefitbycollector;
      userdata.secondbenefitbypolicecomment =
        req.body.secondbenefitbypolicecomment;
      userdata.secondbenefitbycommcomment = req.body.secondbenefitbycommcomment;
      userdata.secondbenefitbycollectorcomment =
        req.body.secondbenefitbycollectorcomment;
      userdata.thirdbenefitbypolice = req.body.thirdbenefitbypolice;
      userdata.thirdbenefitbycommis = req.body.thirdbenefitbycommis;
      userdata.thirdbenefitbycollector = req.body.thirdbenefitbycollector;
      userdata.thirdbenefitbypolicecomment =
        req.body.thirdbenefitbypolicecomment;
      userdata.thirdbenefitbycommcomment = req.body.thirdbenefitbycommcomment;
      userdata.thirdbenefitbycollectorcomment =
        req.body.thirdbenefitbycollectorcomment;
      userdata.victimdetails = req.body.victimdetails;
      userdata.natureofcrime = req.body.natureofcrime;
      userdata.sections = req.body.sections;
      userdata.chargesheetdate = req.body.chargesheetdate;
      userdata.policeinvestigation = req.body.policeinvestigation;
      userdata.courtresults = req.body.courtresults;
      userdata.financialsupport = req.body.financialsupport;
      userdata.dateofcourtorder = req.body.dateofcourtorder;
    }

    // const newUserdata = new Userdata({
    //   text: req.body.text
    //   // name: user.name,
    //   // avatar: user.avatar,
    //   // user: req.user.id
    // });

    await userdata.save();
    res.json(userdata);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Post not found' });
    }
    return res.status(500).send('Server Error');
  }
});

//@route    Delete api/posts/:id
//@desc     Delete a Post
//@access   Private

router.delete('/:id', auth, async (req, res) => {
  try {
    const userdata = await Userdata.findById(req.params.id);

    if (!userdata) {
      return res.status(404).json({ msg: 'Userdata not found' });
    }

    //Check User so than only he can delete the post
    if (userdata.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not Authorised' });
    }
    await userdata.remove();

    res.json({ msg: 'Userdata Removed' });
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Userdata not found' });
    }
    return res.status(500).send('Server Error');
  }
});

//@route    POST api/userdata/comment/:id
//@desc     Comment on a Post
//@access   Private
router.post(
  '/comment/:id',
  [
    auth,
    [
      check('text', 'Text is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select('-password');
      const userdata = await Userdata.findById(req.params.id);
      const newComment = {
        text: req.body.text,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id
      };

      userdata.comments.unshift(newComment);
      await userdata.save();
      res.json(userdata.comments);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server Error');
    }
  }
);
//@route    DELETE api/userdata/comment/:id/:comment_id
//@desc     Delete Comment
//@access   Private
router.delete('/comment/:id/:comment_id', auth, async (req, res) => {
  try {
    const userdata = await Userdata.findById(req.params.id);

    //Pull Out Comment
    const comment = userdata.comments.find(
      comment => comment.id === req.params.comment_id
    );

    //Make Sure comment exists
    if (!comment) {
      return res.status(404).json({ msg: 'Comment does not exist' });
    }

    //Check User
    if (comment.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User Not Authorized' });
    }
    //Get remove index
    const removeIndex = userdata.comments
      .map(comment => comment.user.toString())
      .indexOf(req.user.id);

    userdata.comments.splice(removeIndex, 1);

    await userdata.save();

    res.json(userdata.comments);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send('Server Error');
  }
});
module.exports = router;
