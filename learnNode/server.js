var http = require("http");
//创建服务器，绑定8888端口
http.createServer(function(request,response){
	response.writeHead(200,{'Content-Type':'text/plain'});

	response.end('hello\n');
}).listen(8888);

console.log('Server running at http://127.0.0.1:8888/');