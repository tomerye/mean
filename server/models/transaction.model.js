const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  sourceUserName: {
    type: String,
    required: true
  },
  targetUserName: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  timestamp: {
      type: Date,
      required: true
  }
}, {
  versionKey: false
});


module.exports = mongoose.model('Transaction', TransactionSchema);
