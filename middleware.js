module.exports = function(req, res, next){
  console.log('Url is ', req.originalUrl);
  next();
}