var mongoose =require('mongoose');


const AccountSchema=new mongoose.Schema ({
    
    balance: { type: Number, required: true, default: 0 },
    budget: { type: Number, required: true, default: 0 },
    expenses: { type: Number, required: true, default: 0 },
    transactions: [
      { type: mongoose.Schema.Types.ObjectId, ref: 'Transaction', required: true },
    ],
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  });

const accountModel = mongoose.model('User', AccountSchema);
module.exports=accountModel;