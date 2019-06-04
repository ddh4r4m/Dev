const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const auth = require('../../middleware/auth');

const Userdata = require('../../models/Userdata');
const Profile = require('../../models/Profile');
const User = require('../../models/User');
//@route    POST api/posts
//@desc     Create a post
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
      const newUserdata = new Userdata({
        text: req.body.text,
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
    res.json(userdata);

    if (!userdata) {
      return res.status(404).json({ msg: 'userdata not found' });
    }

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
    if (userdata.user.toString !== req.user.id) {
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

//@route    POST api/posts/comment/:id
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
      return res.status(400).json({ errors: errors.array });
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
      await newUserdata.save();
      res.json(userdata.comments);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server Error');
    }
  }
);
//@route    DELETE api/posts/comment/:id/:comment_id
//@desc     Delete Comment
//@access   Private
router.delete(
  'api/userdata/comment/:id/:comment_id',
  auth,
  async (req, res) => {
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
  }
);
module.exports = router;
