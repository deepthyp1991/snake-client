const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('connect', () => {
    console.log("successfully connected to the game server")
    conn.write('Name: Dee')
  });
  conn.on('close', ()=> {
    console.log('you ded cuz you idled')
  })
  // let newMoves = []
 

  return conn; 
}
module.exports = { connect }