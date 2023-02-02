var express =require ('express');
var  Account =require ('../models/accountModel');
var User =require ('../models/userModel.ts');
var  Transaction =require('../models/transactionModel.js');
var router=express.Router();

router.get("/mine",  async (req, res) => {
    const accounts = await Account.find({ user: req.user._id });
    res.send(accounts);
  });
  router.post("/",  async (req, res) => {
  
    const newAccount = new Account({
      accountItems: req.body.accountItems,
      _id:req.params.id,
      balance:req.params.balance,
      budget:req.params.budget,
      expense:req.params.expense,
      user: req.user._id,
      
    });
    const newAccountCreated = await newAccount.save();
    res.status(201).send({ message: "New Order Created", data: newAccountCreated });
  });
  