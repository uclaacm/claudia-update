const { server, portNum } = require('./app.ts');

server.listen(portNum, () => {
    console.log(`Example app listening on port ${portNum}`)
});