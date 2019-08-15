const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const auth = require('../../middleware/auth');

const Atrocitydata = require('../../models/Atrocitydata');
const Profile = require('../../models/Profile');
const User = require('../../models/User');
//@route    POST api/atrocitydatas
//@desc     Create a atrocitydata
//@access   Private
router.post(
  '/',
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
      return res.status(400).json({ errors: errors.array });
    }

    try {
      const user = await User.findById(req.user.id).select('-password');
      const newAtrocitydata = new Atrocitydata({
        text: req.body.text,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id
      });

      const atrocitydata = await newAtrocitydata.save();
      res.json(atrocitydata);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server Error');
    }
  }
);
//@route    GET api/atrocitydatas
//@desc     Get all atrocitydatas
//@access   Private

router.get('/', auth, async (req, res) => {
  try {
    const atrocitydatas = await Atrocitydata.findOne({ text: 'Helllo' }).sort({
      date: -1
    });
    res.json(atrocitydatas);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send('Server Error');
  }
});
//@route    GET api/atrocitydatas/:id
//@desc     Get atrocitydatas by id
//@access   Private

router.get('/:id', auth, async (req, res) => {
  try {
    const atrocitydata = await Atrocitydata.findById(req.params.id);

    if (!atrocitydata) {
      return res.status(404).json({ msg: 'Atrocitydata not found' });
    }

    res.json(atrocitydata);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Atrocitydata not found' });
    }
    return res.status(500).send('Server Error');
  }
});

//@route    Delete api/atrocitydatas/:id
//@desc     Delete a Atrocitydata
//@access   Private

router.delete('/:id', auth, async (req, res) => {
  try {
    const atrocitydata = await Atrocitydata.findById(req.params.id);

    if (!atrocitydata) {
      return res.status(404).json({ msg: 'Atrocitydata not found' });
    }

    //Check User so than only he can delete the atrocitydata
    if (atrocitydata.user.toString() !== req.user.id) {
      console.log(atrocitydata.user.toString);
      console.log(req.user.id);
      return res.status(401).json({ msg: 'User not Authorised' });
    }
    await atrocitydata.remove();

    res.json({ msg: 'Atrocitydata Removed' });
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Atrocitydata not found' });
    }
    return res.status(500).send('Server Error');
  }
});

//@route    POST api/atrocitydatas/comment/:id
//@desc     Comment on a Atrocitydata
//@access   Private
router.post(
  '/policestation/:id',
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
      return res.status(400).json({ errors: errors.array });
    }

    try {
      const user = await User.findById(req.user.id).select('-password');
      const atrocitydata = await Atrocitydata.findById(req.params.id);
      const newPolicestation = {
        text: req.body.text,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id
      };

      atrocitydata.policestations.unshift(newPolicestation);
      await atrocitydata.save();
      res.json(atrocitydata.policestations);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server Error');
    }
  }
);
//@route    DELETE api/atrocitydatas/comment/:id/:comment_id
//@desc     Delete Comment
//@access   Private
router.delete(
  'api/atrocitydatas/comment/:id/:comment_id',
  auth,
  async (req, res) => {
    try {
      const atrocitydata = await Atrocitydata.findById(req.params.id);

      //Pull Out Comment
      const comment = atrocitydata.policestations.find(
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
      const removeIndex = atrocitydata.policestations
        .map(comment => comment.user.toString())
        .indexOf(req.user.id);

      atrocitydata.policestations.splice(removeIndex, 1);

      await atrocitydata.save();

      res.json(atrocitydata.policestations);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server Error');
    }
  }
);
module.exports = router;
