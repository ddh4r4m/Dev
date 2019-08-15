const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const auth = require('../../middleware/auth');

const Reference = require('../../models/Reference');
const Profile = require('../../models/Profile');
const User = require('../../models/User');

const multer = require('multer');
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './reference');
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

var cpUpload = upload.fields([{ name: 'reference', maxCount: 1 }]);
//@route    POST api/posts
//@desc     Create a post
//@access   Private
router.post(
  '/',
  upload.single('reference'),
  [
    auth,
    [
      check('description', 'Description is required')
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
      console.log(req.body);
      const user = await User.findById(req.user.id).select('-password');
      const newReference = new Reference({
        description: req.body.description,
        reference: req.file.path,
        // reference:
        //   req.files['reference'] == undefined
        //     ? ''
        //     : req.files['reference'][0].path,
        name: user.name,
        user: req.user.id
      });

      const reference = await newReference.save();
      res.json(reference);
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
    const reference = await Reference.find().sort({ date: -1 });

    if (!reference) {
      return res.status(400).json({ msg: 'No Minutes of Meeting Found' });
    }

    res.json(reference);
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
    const reference = await Reference.findById(req.params.id);

    if (!reference) {
      return res.status(404).json({ msg: 'minutes of meeting not found' });
    }

    res.json(reference);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Minutes of meeting not found' });
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

module.exports = router;
