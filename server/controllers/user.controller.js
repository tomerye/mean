const bcrypt = require('bcrypt');
const Joi = require('joi');
const User = require('../models/user.model');

const userSchema = Joi.object({
  userName: Joi.string().required(),
  balance: Joi.number().required()
})


module.exports = {
  insert,
  getAllUsers
}

async function insert(user) {
  user = await Joi.validate(user, userSchema, { abortEarly: false });
  return await new User(user).save();
}

async function getAllUsers(){
  return  await User.find({});
}

async function getUser(userName){
  return await User.findOne({userName});
}