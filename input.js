const net = require("net");
const { connect } = require('./client')

// Stores the active TCP connection object.
let connection;

// setup interface to handle user input from stdin

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (data) {
  if (data === '\u0003') {
    process.exit();
  }
  
  if (data === 'w') {
    connection.write("Move: up")
  }

  if (data === 'a') {
    connection.write("Move: left")
  }

  if (data === 's') {
    connection.write("Move: down")
  }

  if (data === 'd') {
    connection.write("Move: right")
  }

  if (data === '1') {
    connection.write("Say: HELLO")
  }

  if (data === '2') {
    connection.write("Say: YUMMY")
  }

  if (data === '1') {
    connection.write("Say: I WIN!")
  }

};

setupInput();


module.exports = { setupInput };