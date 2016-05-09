var sys = require('sys'),
	http = require('http');

/*
/add/2/2 => 4
/sub/103/42 => 61
/mul/3/2 => 6
/div/100/25 => 4
*/
//Objeto operations
var operations = {
	add: function(a, b){ return a + b},
	sub: function(a, b){ return a - b},
	mul: function(a, b){ return a * b},
	div: function (a, b){ return a / b}
}

http.createServer(function(req, res){
	var parts = req.url.split("/"),
		op = operations[parts[1]],
		a = parseInt(parts[2], 10),
		b = parseInt(parts[3], 10);

	//var result = op(a, b);
	var result = op ? op(a, b) : "Errore"; //con este signo ? es como un if para tirar si es true
	//sys.puts(sys.inspect(parts));

	res.writeHead(200, {'Content-Type': 'text/plain'});
	// res.write("<h1>Hola Gusss!</h1>")
	// res.end("<h2>Este es el final!<h2>");
	//Le agregamos texto para covertirlo en String rapidamente
	res.end("El resultado es: " + result);
}).listen(3000, "127.0.0.60");

sys.puts("Server running at http://127.0.0.60:3000/");