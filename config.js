var dotenv =require('dotenv');

dotenv.config();

module.exports={
 PORT: process.env.PORT || 5000,
  MONGODB_URL: process.env.MONGODB_URL || 'mongodb+srv://dbUser:Captain@cluster0.w11hf.mongodb.net/food?retryWrites=true&w=majority',
  JWT_SECRET: process.env.JWT_SECRET || 'captain',
  accessKeyId: process.env.accessKeyId || 'accessKeyId',
  secretAccessKey: process.env.secretAccessKey || 'secretAccessKey',

};