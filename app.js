const http = require('http');

http.createServer(function (req, res) {
	res.write("Hello!");
	res.end();
	}
).listen(3000);

console.log("server has started on port 3000!")
