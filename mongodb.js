const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Table = require('./models/table')

mongoose.connect('',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
).then(() => {
  console.log("Db is Connected");
});

Table.find({},function(err,table){
  if(err) console.log(err);
  console.log(table);
});


const data = new Table({
  _id: new mongoose.Types.ObjectId(),
  name: 'Hello',
  email: 'hello@gmail.com',
  password: '123'
});

data.save().then((result) => {
  console.log(result);
}).catch(err => console.log(err))


Table.updateOne({id:req.params.id},{$set:{name:Hey}}).then((result) => {
  res.status(200).json(result)
}).catch((err) => {console.log(err)})


Table.deleteOne({id:req.params.id}).then((result) => {
  res.status(200).json(result)
}).catch((err) => {console.log(err)})


var Search = new RegExp(req.params.name,'i');
Table.find({name:Search}).then((result) => {
  res.status(200).json(result)
}).catch((err) => {console.log(err)})