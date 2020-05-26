
const app = require('../app');
const http = require('http');


const port = (process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 */

const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port,()=>console.log("Listening on port 3000..."));



