const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const auth = require('../../middleware/auth');

const Deouserdata = require('../../models/Deouserdata');
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
  { name: 'courtorder', maxCount: 1 },
  { name: 'medicalreport', maxCount: 1 },
  { name: 'postmortem', maxCount: 1 },
  { name: 'abcSummary', maxCount: 1 },
  { name: 'victimone', maxCount: 1 },
  { name: 'victimtwo', maxCount: 1 },
  { name: 'victimthree', maxCount: 1 },
  { name: 'victimfour', maxCount: 1 },
  { name: 'victimfive', maxCount: 1 },
  { name: 'victimsix', maxCount: 1 },
  { name: 'victimseven', maxCount: 1 },
  { name: 'victimeight', maxCount: 1 },
  { name: 'accusedone', maxCount: 1 },
  { name: 'accusedtwo', maxCount: 1 },
  { name: 'accusedthree', maxCount: 1 },
  { name: 'accusedfour', maxCount: 1 },
  { name: 'accusedfive', maxCount: 1 },
  { name: 'accusedsix', maxCount: 1 },
  { name: 'accusedseven', maxCount: 1 },
  { name: 'accusedeight', maxCount: 1 }
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
      const newDeouserdata = new Deouserdata({
        text: req.body.text,
        firno: req.body.firno,
        docImage:
          req.files['docImage'] == undefined
            ? ''
            : req.files['docImage'][0].path,
        doccImage:
          req.files['doccImage'] == undefined
            ? ''
            : req.files['doccImage'][0].path,
        courtorder:
          req.files['courtorder'] == undefined
            ? ''
            : req.files['courtorder'][0].path,
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
        victimsix:
          req.files['victimsix'] == undefined
            ? ''
            : req.files['victimsix'][0].path,
        victimseven:
          req.files['victimseven'] == undefined
            ? ''
            : req.files['victimseven'][0].path,
        victimeight:
          req.files['victimeight'] == undefined
            ? ''
            : req.files['victimeight'][0].path,
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
        accusedsix:
          req.files['accusedsix'] == undefined
            ? ''
            : req.files['accusedsix'][0].path,
        accusedseven:
          req.files['accusedseven'] == undefined
            ? ''
            : req.files['accusedseven'][0].path,
        accusedeight:
          req.files['accusedeight'] == undefined
            ? ''
            : req.files['accusedeight'][0].path,
        disabledata: req.body.disabledata,
        sectionschanged: req.body.sectionschanged,
        othersections: req.body.othersections,
        othersectionsv2: req.body.othersectionsv2,
        closecase: req.body.closecase,
        closethecase: req.body.closethecase,
        stagetwochange: req.body.stagetwochange,
        typeofatrocity: req.body.typeofatrocity,
        ipcapplied: req.body.ipcapplied,
        sectionsapplied: req.body.sectionsapplied,
        typeofatrocityv2: req.body.typeofatrocityv2,
        ipcappliedv2: req.body.ipcappliedv2,
        sectionsappliedv2: req.body.sectionsappliedv2,
        policestation: req.body.policestation,
        crimeregisterno: req.body.crimeregisterno,
        dateofcrime: req.body.dateofcrime,
        regdateofcrime: req.body.regdateofcrime,
        approve: req.body.approve,
        utrnumI: req.body.utrnumI,
        utrnumII: req.body.utrnumII,
        utrnumIII: req.body.utrnumIII,
        benefitsgivenbyACI: req.body.benefitsgivenbyACI,
        benefitsgivenbyACII: req.body.benefitsgivenbyACII,
        benefitsgivenbyACIII: req.body.benefitsgivenbyACIII,
        isbenefitsgivenbyACI: req.body.isbenefitsgivenbyACI,
        isbenefitsgivenbyACII: req.body.isbenefitsgivenbyACII,
        isbenefitsgivenbyACIII: req.body.isbenefitsgivenbyACIII,
        monetarycompbyDCI: req.body.monetarycompbyDCI,
        monetarycompbyDCII: req.body.monetarycompbyDCII,
        monetarycompbyDCIII: req.body.monetarycompbyDCIII,
        otherbenefitycompbyDCI: req.body.otherbenefitycompbyDCI,
        otherbenefitycompbyDCII: req.body.otherbenefitycompbyDCII,
        otherbenefitycompbyDCIII: req.body.otherbenefitycompbyDCIII,
        monetarycompbyACI: req.body.monetarycompbyACI,
        monetarycompbyACII: req.body.monetarycompbyACII,
        monetarycompbyACIII: req.body.monetarycompbyACIII,
        otherbenefitycompbyACI: req.body.otherbenefitycompbyACI,
        otherbenefitycompbyACII: req.body.otherbenefitycompbyACII,
        otherbenefitycompbyACIII: req.body.otherbenefitycompbyACIII,
        firstbenefitbypolice: req.body.firstbenefitbypolice,
        firstbenefitbypolicedate: req.body.firstbenefitbypolicedate,
        firstbenefitbycommis: req.body.firstbenefitbycommis,
        firstbenefitbycommisdate: req.body.firstbenefitbycommisdate,
        firstbenefitbycollector: req.body.firstbenefitbycollector,
        firstbenefitbycollectordate: req.body.firstbenefitbycollectordate,
        firstbenefitbypolicecomment: req.body.firstbenefitbypolicecomment,
        firstbenefitbycommcomment: req.body.firstbenefitbycommcomment,
        firstbenefitbycollectorcomment: req.body.firstbenefitbycollectorcomment,
        secondbenefitbypolice: req.body.secondbenefitbypolice,
        secondbenefitbypolicedate: req.body.secondbenefitbypolicedate,
        secondbenefitbycommis: req.body.secondbenefitbycommis,
        secondbenefitbycommisdate: req.body.secondbenefitbycommisdate,
        secondbenefitbycollector: req.body.secondbenefitbycollector,
        secondbenefitbycollectordate: req.body.secondbenefitbycollectordate,
        secondbenefitbypolicecomment: req.body.secondbenefitbypolicecomment,
        secondbenefitbycommcomment: req.body.secondbenefitbycommcomment,
        secondbenefitbycollectorcomment:
          req.body.secondbenefitbycollectorcomment,
        thirdbenefitbypolice: req.body.thirdbenefitbypolice,
        thirdbenefitbypolicedate: req.body.thirdbenefitbypolicedate,
        thirdbenefitbycommis: req.body.thirdbenefitbycommis,
        thirdbenefitbycommisdate: req.body.thirdbenefitbycommisdate,
        thirdbenefitbycollector: req.body.thirdbenefitbycollector,
        thirdbenefitbycollectordate: req.body.thirdbenefitbycollectordate,
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

      const post = await newDeouserdata.save();
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
    const deouserdata = await Deouserdata.find().sort({ date: -1 });

    if (!deouserdata) {
      return res.status(400).json({ msg: 'No Cases Found' });
    }

    res.json(deouserdata);
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
    const deouserdata = await Deouserdata.findById(req.params.id);

    if (!deouserdata) {
      return res.status(404).json({ msg: 'deouserdata not found' });
    }

    res.json(deouserdata);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Deouserdata not found' });
    }
    return res.status(500).send('Server Error');
  }
});

//@route    GET api/posts/:id
//@desc     Get posts by id
//@access   Private

router.put('/:id', cpUpload, auth, async (req, res) => {
  try {
    const deouserdata = await Deouserdata.findById(req.params.id);

    if (!deouserdata) {
      return res.status(404).json({ msg: 'userdata not found' });
    } else {
      deouserdata.text = req.body.text;
      deouserdata.firno = req.body.firno;
      deouserdata.disabledata = req.body.disabledata;
      deouserdata.othersections = req.body.othersections;
      deouserdata.othersectionsv2 = req.body.othersectionsv2;
      deouserdata.closecase = req.body.closecase;
      deouserdata.closethecase = req.body.closethecase;
      deouserdata.sectionschanged = req.body.sectionschanged;
      deouserdata.stagetwochange = req.body.stagetwochange;
      deouserdata.approve = req.body.approve;

      // console.log(req.files['docImage'] !== undefined);
      if (req.files['docImage'] !== undefined) {
        deouserdata.docImage = req.files['docImage'][0].path;
      }
      if (req.files['doccImage'] !== undefined) {
        deouserdata.doccImage = req.files['doccImage'][0].path;
      }
      if (req.files['courtorder'] !== undefined) {
        deouserdata.courtorder = req.files['courtorder'][0].path;
      }
      if (req.files['postmortem'] !== undefined) {
        deouserdata.postmortem = req.files['postmortem'][0].path;
      }
      if (req.files['medicalreport'] !== undefined) {
        deouserdata.medicalreport = req.files['medicalreport'][0].path;
      }
      if (req.files['abcSummary'] !== undefined) {
        deouserdata.abcSummary = req.files['abcSummary'][0].path;
      }
      if (req.files['victimone'] !== undefined) {
        deouserdata.victimone = req.files['victimone'][0].path;
      }
      if (req.files['victimtwo'] !== undefined) {
        deouserdata.victimtwo = req.files['victimtwo'][0].path;
      }
      if (req.files['victimthree'] !== undefined) {
        deouserdata.victimthree = req.files['victimthree'][0].path;
      }
      if (req.files['victimfour'] !== undefined) {
        deouserdata.victimfour = req.files['victimfour'][0].path;
      }
      if (req.files['victimfive'] !== undefined) {
        deouserdata.victimfive = req.files['victimfive'][0].path;
      }
      if (req.files['victimsix'] !== undefined) {
        deouserdata.victimsix = req.files['victimsix'][0].path;
      }
      if (req.files['victimseven'] !== undefined) {
        deouserdata.victimseven = req.files['victimseven'][0].path;
      }
      if (req.files['victimeight'] !== undefined) {
        deouserdata.victimeight = req.files['victimeight'][0].path;
      }
      if (req.files['accusedone'] !== undefined) {
        deouserdata.accusedone = req.files['accusedone'][0].path;
      }
      if (req.files['accusedtwo'] !== undefined) {
        deouserdata.accusedtwo = req.files['accusedtwo'][0].path;
      }
      if (req.files['accusedthree'] !== undefined) {
        deouserdata.accusedthree = req.files['accusedthree'][0].path;
      }
      if (req.files['accusedfour'] !== undefined) {
        deouserdata.accusedfour = req.files['accusedfour'][0].path;
      }
      if (req.files['accusedfive'] !== undefined) {
        deouserdata.accusedfive = req.files['accusedfive'][0].path;
      }
      if (req.files['accusedsix'] !== undefined) {
        deouserdata.accusedsix = req.files['accusedsix'][0].path;
      }
      if (req.files['accusedseven'] !== undefined) {
        deouserdata.accusedseven = req.files['accusedseven'][0].path;
      }
      if (req.files['accusedeight'] !== undefined) {
        deouserdata.accusedeight = req.files['accusedeight'][0].path;
      }

      // if (!req.files) {
      //   deouserdata.docImage = req.files['docImage'][0].path;
      //   deouserdata.doccImage = req.files['doccImage'][0].path;
      //   deouserdata.victimone = req.files['victimone'][0].path;
      //   deouserdata.victimtwo = req.files['victimtwo'][0].path;
      //   deouserdata.victimthree = req.files['victimthree'][0].path;
      //   deouserdata.victimfour = req.files['victimfour'][0].path;
      //   deouserdata.victimfive = req.files['victimfive'][0].path;
      //   deouserdata.accusedone = req.files['accusedone'][0].path;
      //   deouserdata.accusedtwo = req.files['accusedtwo'][0].path;
      //   deouserdata.accusedthree = req.files['accusedthree'][0].path;
      //   deouserdata.accusedfour = req.files['accusedfour'][0].path;
      //   deouserdata.accusedfive = req.files['accusedfive'][0].path;
      // }
      deouserdata.typeofatrocity = req.body.typeofatrocity;
      deouserdata.ipcapplied = req.body.ipcapplied;
      deouserdata.sectionsapplied = req.body.sectionsapplied;
      deouserdata.typeofatrocityv2 = req.body.typeofatrocityv2;
      deouserdata.ipcappliedv2 = req.body.ipcappliedv2;
      deouserdata.sectionsappliedv2 = req.body.sectionsappliedv2;
      deouserdata.policestation = req.body.policestation;
      deouserdata.crimeregisterno = req.body.crimeregisterno;
      deouserdata.dateofcrime = req.body.dateofcrime;
      deouserdata.regdateofcrime = req.body.regdateofcrime;
      deouserdata.utrnumI = req.body.utrnumI;
      deouserdata.utrnumII = req.body.utrnumII;
      deouserdata.utrnumIII = req.body.utrnumIII;
      deouserdata.benefitsgivenbyACI = req.body.benefitsgivenbyACI;
      deouserdata.benefitsgivenbyACII = req.body.benefitsgivenbyACII;
      deouserdata.benefitsgivenbyACIII = req.body.benefitsgivenbyACIII;
      deouserdata.isbenefitsgivenbyACI = req.body.isbenefitsgivenbyACI;
      deouserdata.isbenefitsgivenbyACII = req.body.isbenefitsgivenbyACII;
      deouserdata.isbenefitsgivenbyACIII = req.body.isbenefitsgivenbyACIII;
      deouserdata.monetarycompbyDCI = req.body.monetarycompbyDCI;
      deouserdata.monetarycompbyDCII = req.body.monetarycompbyDCII;
      deouserdata.monetarycompbyDCIII = req.body.monetarycompbyDCIII;
      deouserdata.otherbenefitycompbyDCI = req.body.otherbenefitycompbyDCI;
      deouserdata.otherbenefitycompbyDCII = req.body.otherbenefitycompbyDCII;
      deouserdata.otherbenefitycompbyDCIII = req.body.otherbenefitycompbyDCIII;
      deouserdata.monetarycompbyACI = req.body.monetarycompbyACI;
      deouserdata.monetarycompbyACII = req.body.monetarycompbyACII;
      deouserdata.monetarycompbyACIII = req.body.monetarycompbyACIII;
      deouserdata.otherbenefitycompbyACI = req.body.otherbenefitycompbyACI;
      deouserdata.otherbenefitycompbyACII = req.body.otherbenefitycompbyACII;
      deouserdata.otherbenefitycompbyACIII = req.body.otherbenefitycompbyACIII;
      deouserdata.firstbenefitbypolice = req.body.firstbenefitbypolice;
      deouserdata.firstbenefitbypolicedate = req.body.firstbenefitbypolicedate;
      deouserdata.firstbenefitbycommis = req.body.firstbenefitbycommis;
      deouserdata.firstbenefitbycommisdate = req.body.firstbenefitbycommisdate;
      deouserdata.firstbenefitbycollector = req.body.firstbenefitbycollector;
      deouserdata.firstbenefitbycollectordate =
        req.body.firstbenefitbycollectordate;
      deouserdata.firstbenefitbypolicecomment =
        req.body.firstbenefitbypolicecomment;
      deouserdata.firstbenefitbycommcomment =
        req.body.firstbenefitbycommcomment;
      deouserdata.firstbenefitbycollectorcomment =
        req.body.firstbenefitbycollectorcomment;
      deouserdata.secondbenefitbypolice = req.body.secondbenefitbypolice;
      deouserdata.secondbenefitbypolicedate =
        req.body.secondbenefitbypolicedate;
      deouserdata.secondbenefitbycommis = req.body.secondbenefitbycommis;
      deouserdata.secondbenefitbycommisdate =
        req.body.secondbenefitbycommisdate;
      deouserdata.secondbenefitbycollector = req.body.secondbenefitbycollector;
      deouserdata.secondbenefitbycollectordate =
        req.body.secondbenefitbycollectordate;
      deouserdata.secondbenefitbypolicecomment =
        req.body.secondbenefitbypolicecomment;
      deouserdata.secondbenefitbycommcomment =
        req.body.secondbenefitbycommcomment;
      deouserdata.secondbenefitbycollectorcomment =
        req.body.secondbenefitbycollectorcomment;
      deouserdata.thirdbenefitbypolice = req.body.thirdbenefitbypolice;
      deouserdata.thirdbenefitbypolicedate = req.body.thirdbenefitbypolicedate;
      deouserdata.thirdbenefitbycommis = req.body.thirdbenefitbycommis;
      deouserdata.thirdbenefitbycommisdate = req.body.thirdbenefitbycommisdate;
      deouserdata.thirdbenefitbycollector = req.body.thirdbenefitbycollector;
      deouserdata.thirdbenefitbycollectordate =
        req.body.thirdbenefitbycollectordate;
      deouserdata.thirdbenefitbypolicecomment =
        req.body.thirdbenefitbypolicecomment;
      deouserdata.thirdbenefitbycommcomment =
        req.body.thirdbenefitbycommcomment;
      deouserdata.thirdbenefitbycollectorcomment =
        req.body.thirdbenefitbycollectorcomment;
      deouserdata.victimdetails = req.body.victimdetails;
      deouserdata.natureofcrime = req.body.natureofcrime;
      deouserdata.sections = req.body.sections;
      deouserdata.chargesheetdate = req.body.chargesheetdate;
      deouserdata.policeinvestigation = req.body.policeinvestigation;
      deouserdata.courtresults = req.body.courtresults;
      deouserdata.financialsupport = req.body.financialsupport;
      deouserdata.dateofcourtorder = req.body.dateofcourtorder;
    }

    // const newDeouserdata = new Deouserdata({
    //   text: req.body.text
    //   // name: user.name,
    //   // avatar: user.avatar,
    //   // user: req.user.id
    // });

    await deouserdata.save();
    res.json(deouserdata);
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
    const deouserdata = await Deouserdata.findById(req.params.id);

    if (!deouserdata) {
      return res.status(404).json({ msg: 'Deouserdata not found' });
    }

    //Check User so than only he can delete the post
    if (deouserdata.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not Authorised' });
    }
    await deouserdata.remove();

    res.json({ msg: 'Deouserdata Removed' });
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Deouserdata not found' });
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
      const deouserdata = await Deouserdata.findById(req.params.id);
      const newComment = {
        text: req.body.text,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id
      };

      deouserdata.comments.unshift(newComment);
      await deouserdata.save();
      res.json(deouserdata.comments);
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
    const deouserdata = await Deouserdata.findById(req.params.id);

    //Pull Out Comment
    const comment = deouserdata.comments.find(
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
    const removeIndex = deouserdata.comments
      .map(comment => comment.user.toString())
      .indexOf(req.user.id);

    deouserdata.comments.splice(removeIndex, 1);

    await deouserdata.save();

    res.json(deouserdata.comments);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send('Server Error');
  }
});
module.exports = router;
