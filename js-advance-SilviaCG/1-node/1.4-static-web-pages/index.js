const http = require('http');
const url = require('url');
const fs = require('fs');

/* Creating a server and listening for requests. */
const server = http.createServer((request, response) =>{
    const urlObject = url.parse(request.url);
    const path = urlObject.path;

    let fileSystemPath= '';
    if(path === '/'){
        fileSystemPath = 'static/index.html';
    }else{
        fileSystemPath = `static${path}`;
    }

    /* The above code is checking if the file exists in the file system. If it does, it will read the
    file and send it to the client. If it doesn't, it will send a 404 error. If there is an error
    reading the file, it will send a 500 error. */
    fs.stat(fileSystemPath, error => {
        if(!error){
            fs.readFile(fileSystemPath, (error, file) => {
                if(!error){
                    const status = 200;
                    const mimeType = {'Content-type' : 'text/html'};
                    response.writeHead(status, mimeType);
                    response.write(file);
                    response.end();
                }else{
                    //500 internal-server error
                    const status = 500;
                    const mimeType = {'Content-type' : 'text/plain'};
                    response.writeHead(status, mimeType);
                    response.write('SERVER ERROR');
                    response.end();
                }
            })
        }else{
            //404 not found
            const status = 404;
                    const mimeType = {'Content-type' : 'text/html'};
                    response.writeHead(status, mimeType);
                    response.write('<html><body>NOT FOUND</body></html>');
                    response.end();
        }
    });
});

server.listen(8080);