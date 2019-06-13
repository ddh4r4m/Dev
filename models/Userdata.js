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
      text: {
        type: String,
        required: true
      },
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
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
    type: Date
  },
  regdateofcrime: {
    type: Date
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
    type: Date
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
  dateofcourtorder: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Userdata = mongoose.model('userdata', UserdataSchema);
