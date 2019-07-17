const mongoose = require('mongoose');
const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  name: {
    type: String,
    default: ''
  },
  photo: {
    type: String,
    default: 'profilepics/defaultprofilepic.jpg'
  },
  officeaddrss: {
    type: String,
    default: ''
  },
  personalmobno: {
    type: String,
    default: ''
  },
  officemobno: {
    type: String,
    default: ''
  },
  emailidpersonal: {
    type: String,
    default: ''
  },
  emailidoffice: {
    type: String,
    default: ''
  },
  dateofjoining: {
    type: String,
    default: ''
  },
  company: {
    type: String
  },
  website: {
    type: String
  },
  location: {
    type: String
  },
  bio: {
    type: String
  },
  githubusername: {
    type: String
  },
  status: {
    type: String,
    required: true
  },
  designation: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
