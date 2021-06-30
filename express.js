const express = require('express');
const app = express();
const router = express.Router();
const CheckUrl = require('./middleware');

app.set('view engine','ejs');

app.get('/',function(req,res){
  res.render('Home');
});

router.get('/about', CheckUrl, function(req,res){
  res.render('About');
});

router.get('/contact', CheckUrl, function(req,res){
  res.render('Contact');
  // res.sendFile(__dirname+'/Pages/Contact.html');
});

router.get('/profile/:name', CheckUrl, function(req,res){
  data={email:req.params.name+'@gmail.com', address:'surat', skills:['ReactJs','NodeJs','Laravel']}
  res.render('Profile',{name:req.params.name, data:data});
});

app.use('/',router);
app.use('/assets', express.static('assets'));
app.listen(5000);