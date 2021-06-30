var http = require('http');
var rf = require('fs');

var call = (req, res) => {
  rf.readFile('demo.html', function(err,data){
    if(err){
      console.log(err);
    }else{
      res.writeHead(200,{'content-Type':'text/html'});
      res.write(data);
      res.end();
    }
  })
}

var server = http.createServer(call);

server.listen(2424);