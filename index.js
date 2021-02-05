const http = require('http');
let app = http.createServer();
const Game = require('./src/Game');

app.listen(3000, '127.0.0.1');

const game = new Game();
game.start();
