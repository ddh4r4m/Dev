const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const {check, validationResult} = require('express-validator/check');

const Profile = require('../../models/Profile');
const User = require('../../models/User');

//@route    GET api/profile/me
//@desc     Get Current Users Profile
//@access   Private 
router.get('/me',async (req,auth,res)=>{
    try{
        const profile = await Profile.findOne({ user: req.user.id }).populate('user',['name', 'avatar']);

        if(!profile){
            return res.status(400).json({msg:'There is no Profile for this User'});
        }
        //else send the profile
        res.json(profile);
    } catch (err){
        console.error(err.message);
        res.status(500).send('Server error');        
    }
});


//@route    POST api/profile
//@desc     Create or Update User Profile
//@access   Private 

router.post('/', auth, [
    check('status','Status is required').not().isEmpty(),
    check('skills','Skills is required').not().isEmpty()
],
async (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    const {
        status,
        skills
    }= req.body;

    //Build Profile object
    const profileFields = {};
    profileFields.user = req.user.id;
    if(status) profileFields.status = status;
    if(skills) profileFields.skills = skills;

    try{
        let profile = await Profile.findOne({user:req.user.id});
        if(profile){
            //Update Profile
            profile = await Profile.findOneAndUpdate(
                {user : req.user.id},
                {$set : profileFields},
                {new : true  }
            );
            return res.json(profile);
        }

        //Create
        profile = new Profile(profileFields);

        await Profile.save();
        res.json(Profile);
    }catch(err){
        console.error(err.message);
        res.status(500).send('Server Error')
    }
});


//@route    Get api/profile
//@desc     Get all Profiles
//@access   Public 
router.get('/',async (req,res)=>{
    try {
        const profiles = await Profile.find().populate('user',['name','avatar']);
        res.json(profiles);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});
//@route    Get api/profile/user/:user_id
//@desc     Get Profile by User id
//@access   Public 
router.get('/user/:user_id',async (req,res)=>{
    try {
        const profile = await Profile.findOne({user : req.params.user_id }).populate('user',['name','avatar']);

        if(!profile) return res.status(400).json({ msg : 'Profile Not Found'}
        );
        res.json(profile);
    } catch (err) {
        console.error(err.message);
        if(err.kind == 'ObjectId'){
            return res.status(400).json({ msg : 'Profile Not Found'});
        }
        res.status(500).send('Server Error');
    }
});


//@route    DELETE api/profile
//@desc     DELETE profile ,user & posts
//@access   Private
router.delete('/',async (req,res)=>{
    try {
        //Remove Profile
        await Profile.findOneAndRemove({user : req.user.id});
        //Remove User
        await User.findOneAndRemove({_id : req.user.id});
     } catch (err) {
        console.error(err.message); 
        res.status(500).send('Server Error');
    }
});

//Add Profile Experience <---6
module.exports = router;