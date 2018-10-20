const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true
  },
  balance: {
    type: Number,
    required: true
  }
}, {
  versionKey: false
});


module.exports = mongoose.model('User', UserSchema);
