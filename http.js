const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    try {
        const html = fs.readFileSync('http.html');
        res.write(html);
        res.end();
    } catch(e) {
        res.statusCode = 404;
        res.write("Bad request");
        console.log(e);
        res.end();
    }

})

const port = 3001;

server.listen(port, function(){
    console.log("Server running " + port);
})