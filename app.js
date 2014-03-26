var http = require('http');

http.createServer(function(request, response){ 
	console.log(" getting started in node ");
	response.writeHeader(200, {"Content-Type":"text/plain"});
	response.write("Hello, World!");
	response.end();
}).listen(8009)

console.log("server running on http://localhost:8009");
