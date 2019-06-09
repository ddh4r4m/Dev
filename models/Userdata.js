const mongoose = require('mongoose');

const UserdataSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  text: {
    type: String,
    required: true
  },
  name: {
    type: String
  },
  avatar: {
    type: String
  },
  likes: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
      }
    }
  ],
  comments: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
      },

      year: {
        type: String
      },
      policestation: {
        type: String
      },
      crimeregisterno: {
        type: String
      },
      dateofcrime: {
        type: String
      },
      regdateofcrime: {
        type: String
      },
      victimdetails: {
        type: String
      },
      natureofcrime: {
        type: String
      },
      sections: {
        type: String
      },
      chargesheetdate: {
        type: String
      },
      policeinvestigation: {
        type: String
      },
      courtresults: {
        type: String
      },
      financialsupport: {
        type: String
      },
      name: {
        type: String
      },
      avatar: {
        type: String
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Userdata = mongoose.model('userdata', UserdataSchema);
