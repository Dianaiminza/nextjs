var mongoose =require('mongoose');

const transactionSchema = new mongoose.Schema({
    account: { type: mongoose.Schema.Types.ObjectId, ref: 'Account', required: true },
    amount: { type: Number, required: true },
    category: { type: String, required: true },
    date: { type: Date, required: true },
    description: { type: String },
    title: { type: String, required: true },
    type: { type: String, required: true, enum: ['expense', 'revenue'] },
});

const transactionModel = mongoose.model('Transaction', transactionSchema);
module.exports=transactionModel;