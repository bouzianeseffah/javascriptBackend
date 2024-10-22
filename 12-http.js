const http = require('http');

const server = http.createServer((req, res) => {
    //console.log(req)
    if(req.url === '/'){
        res.end('welcome to our page')

    }
    if(req.url === '/about'){
        res.end('here is our short history')
    }
   res.end(`
    <h1>Oops</h1>
    <p>we cant find the page you looking for  </p>
    <a href="/">back home</a>
    `)
});




server.listen(5000)

