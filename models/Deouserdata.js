const mongoose = require('mongoose');

var TypeofAtrocity = new mongoose.Schema([
  {
    value: String,
    label: String
  }
]);

const DeouserdataSchema = new mongoose.Schema({
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
  doccImage: {
    type: String
  },
  courtorder: {
    type: String
  },
  medicalresult: {
    type: String
  },
  postmortem: {
    type: String
  },
  abcSummary: {
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
  victimsix: {
    type: String
  },
  victimseven: {
    type: String
  },
  victimeight: {
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
  accusedsix: {
    type: String
  },
  accusedseven: {
    type: String
  },
  accusedeight: {
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
  typeofatrocityv2: {
    type: Object
  },
  ipcappliedv2: {
    type: Object
  },
  sectionsappliedv2: {
    type: Object
  },
  othersections: {
    type: String
  },
  othersectionsv2: {
    type: String
  },
  closecase: {
    type: String
  },
  closethecase: {
    type: Boolean,
    default: false
  },
  sectionschanged: {
    type: String
  },
  stagetwochange: {
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
  utrnumI: {
    type: String
  },
  utrnumII: {
    type: String
  },
  utrnumIII: {
    type: String
  },
  benefitsgivenbyACI: {
    type: String
  },
  approve: {
    type: String
  },
  benefitsgivenbyACII: {
    type: String
  },
  benefitsgivenbyACIII: {
    type: String
  },
  isbenefitsgivenbyACI: {
    type: String
  },
  isbenefitsgivenbyACII: {
    type: String
  },
  isbenefitsgivenbyACIII: {
    type: String
  },
  monetarycompbyDCI: {
    type: String
  },
  monetarycompbyDCII: {
    type: String
  },
  monetarycompbyDCIII: {
    type: String
  },
  otherbenefitycompbyDCI: {
    type: String
  },
  otherbenefitycompbyDCII: {
    type: String
  },
  otherbenefitycompbyDCIII: {
    type: String
  },
  monetarycompbyACI: {
    type: String
  },
  monetarycompbyACII: {
    type: String
  },
  monetarycompbyACIII: {
    type: String
  },
  otherbenefitycompbyACI: {
    type: String
  },
  otherbenefitycompbyACII: {
    type: String
  },
  otherbenefitycompbyACIII: {
    type: String
  },
  firstbenefitbypolice: {
    type: String
  },
  firstbenefitbypolicedate: {
    type: String
  },
  firstbenefitbycommis: {
    type: String
  },
  firstbenefitbycommisdate: {
    type: String
  },
  firstbenefitbycollector: {
    type: String
  },
  firstbenefitbycollectordate: {
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
  secondbenefitbypolicedate: {
    type: String
  },
  secondbenefitbycommis: {
    type: String
  },
  secondbenefitbycommisdate: {
    type: String
  },
  secondbenefitbycollector: {
    type: String
  },
  secondbenefitbycollectordate: {
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
  thirdbenefitbypolice: {
    type: String
  },
  thirdbenefitbypolicedate: {
    type: String
  },
  thirdbenefitbycommis: {
    type: String
  },
  thirdbenefitbycommisdate: {
    type: String
  },
  thirdbenefitbycollector: {
    type: String
  },
  thirdbenefitbycollectordate: {
    type: String
  },
  thirdbenefitbypolicecomment: {
    type: String
  },
  thirdbenefitbycommcomment: {
    type: String
  },
  thirdbenefitbycollectorcomment: {
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

module.exports = Deouserdata = mongoose.model('deouserdata', DeouserdataSchema);
