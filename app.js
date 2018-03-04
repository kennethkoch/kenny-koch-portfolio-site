const server = require('./server');

const PORT = process.env.port || 3000

server.listen(PORT, () => console.log(`Listening on Port ${PORT}`));
