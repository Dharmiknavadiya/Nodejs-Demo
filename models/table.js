const mongoose = require('mongoose');

const tableSchema = new mongoose.Schema({
  _id:mongoose.Schema.Types.ObjectId(),
  name: String,
  email: String,
  password: String
});

module.exports=mongoose.model('table',tableSchema);