const server = require('./api/server');

const PORT = 4000;

server.listen(PORT, () => {
    console.log(`\n*** server is listening on port: ${PORT} ***\n`)
})