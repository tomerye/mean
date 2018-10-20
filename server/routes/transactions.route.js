const express = require('express');
const passport = require('passport');
const asyncHandler = require('express-async-handler');
const transactionCtrl = require('../controllers/transaction.controller');

const router = express.Router();
module.exports = router;

router.route('/')
  .post(asyncHandler(insert))
  .get(asyncHandler(getAllTransactions));

async function insert(req, res) {
  let transaction = await transactionCtrl.insert(req.body);
  res.json(transaction);
}

async function getAllTransactions(req, res) {
  let transactions = await transactionCtrl.getAllTransactions();
  res.json(transactions);
}
