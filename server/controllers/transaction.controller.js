const bcrypt = require('bcrypt');
const Joi = require('joi');
const Transaction = require('../models/transaction.model');
const User = require('../models/user.model');

const transactionSchema = Joi.object({
    sourceUserName: Joi.string().required(),
    targetUserName: Joi.string().required(),
    amount: Joi.number().required()
})

module.exports = {
  insert,
  getAllTransactions
}

async function insert(transaction) {
  transaction = await Joi.validate(transaction, transactionSchema, { abortEarly: false });
  const transactionUsers = await User.find({$or: [{userName : transaction.sourceUserName}, {userName : transaction.targetUserName}]});

  const from = transactionUsers.find(user => user.userName === transaction.sourceUserName );
  const to = transactionUsers.find(user => user.userName === transaction.targetUserName );

  if(!from || !to){
    throw new Error('bad request');
  }

  if(from.balance < transaction.amount){
    throw new Error('insufficient funds')
  }

  from.balance -= transaction.amount;
  to.balance += transaction.amount;
  from.save();
  to.save();
  //TODO: implement roolback or use new mongo transaction feature to handle case of error
  transaction.timestamp = new Date(new Date().toUTCString());
  return await new Transaction(transaction).save();
}


async function getAllTransactions(){
    return await Transaction.find({});
}