const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const auth = require('../../middleware/auth');
const config = require('config')
const { check, validationResult } = require('express-validator/check');
const jwt = require('jsonwebtoken');

const User = require('../../models/User')

router.get('/',auth, async (req,res)=>{
    try{
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    }catch (err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


//@route    GET api/auth
//@desc     Authenticate User & get token
//@access   Public
router.post('/',[
    check('email', 'Please include a Valid Email ').isEmail(),
    check('password','Password is Required').exists()
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

        if(!user){
            res.status(400).json({errors:[{msg:'Invalid Credentials'}]});
        }
        //Password Match Verification
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            res.status(400).json({errors:[{msg:'Invalid Credentials'}]});
        }
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