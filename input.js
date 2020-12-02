let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (key) => {
    if(key === '\u0003'){
      process.exit()
    }
    handleUserInput(key)
 })

 const handleUserInput = function(key){
  if(key === 'w'){
    conn.write("Move: up" )
  }
  if(key === 'a'){
    conn.write("Move: down")
  }
  if(key === 's'){
    conn.write("Move: left" )
  }
  if(key === 'd'){
    conn.write("Move: right")
  }
  if(key === 'p'){
    conn.write('Say: whoo')
  }


 }
 return stdin;
}

module.exports = {setupInput}