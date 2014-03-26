var express = require('express'), app = express();

app.get('/', function(req, res){
	res.send("Hello, World!");
});

app.listen(8009);
console.log("server was started at http://localhost:8009");
