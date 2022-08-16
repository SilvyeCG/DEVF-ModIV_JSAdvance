// const { stat } = require('fs');


const http = require('http');
const server = http.createServer((request, response) =>{
    const status = 200; //ok
    const mimeType = {'Content-type' : 'text/html'};
    response.writeHead(status, mimeType);
    response.write('<html><body>HI FROM HTML NODEJS</body></html>');
    response.end();
});

server.listen(9000);
console.log('server is working');