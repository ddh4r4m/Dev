const mongoose = require('mongoose');

var TypeofAtrocity = new mongoose.Schema([
  {
    value: String,
    label: String
  }
]);

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
  disabledata: {
    type: Boolean,
    default: false
  },
  docImage: {
    type: String
  },
  victimone: {
    type: String
  },
  victimtwo: {
    type: String
  },
  victimthree: {
    type: String
  },
  victimfour: {
    type: String
  },
  victimfive: {
    type: String
  },
  accusedone: {
    type: String
  },
  accusedtwo: {
    type: String
  },
  accusedthree: {
    type: String
  },
  accusedfour: {
    type: String
  },
  accusedfive: {
    type: String
  },
  typeofatrocity: {
    type: Object
  },
  ipcapplied: {
    type: Object
  },
  sectionsapplied: {
    type: Object
  },
  closecase: {
    type: Boolean,
    default: false
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
  firstbenefitbypolice: {
    type: String
  },
  firstbenefitbycommis: {
    type: String
  },
  firstbenefitbycollector: {
    type: String
  },
  firstbenefitbypolicecomment: {
    type: String
  },
  firstbenefitbycommcomment: {
    type: String
  },
  firstbenefitbycollectorcomment: {
    type: String
  },
  secondbenefitbypolice: {
    type: String
  },
  secondbenefitbycommis: {
    type: String
  },
  secondbenefitbycollector: {
    type: String
  },
  secondbenefitbypolicecomment: {
    type: String
  },
  secondbenefitbycommcomment: {
    type: String
  },
  secondbenefitbycollectorcomment: {
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
  dateofcourtorder: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Userdata = mongoose.model('userdata', UserdataSchema);
