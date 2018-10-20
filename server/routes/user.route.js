const express = require('express');
const passport = require('passport');
const asyncHandler = require('express-async-handler');
const userCtrl = require('../controllers/user.controller');

const router = express.Router();
module.exports = router;

router.route('/')
  .post(asyncHandler(insert))
  .get(asyncHandler(getAllUsers));

async function insert(req, res) {
  let user = await userCtrl.insert(req.body);
  res.json(user);
}

async function getAllUsers(req, res) {
  let users = await userCtrl.getAllUsers();
  res.json(users);
}

async function getUser(req, res){
  
}