const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO.listen(server);

app.use(express.static(__dirname + '/public'));

server.listen(3000, () => {
    console.log('Server listening on port 3000');
});

//SERIAL COMMUNICATION
const Serialport = require('serialport');
const ReadLine = Serialport.parsers.Readline;

const port = new Serialport('COM3', {
    baudRate: 9600
});

const parser = port.pipe(new ReadLine({ delimeter: '\r\n' }));

parser.on('open', function() {
    console.log('Connection is opened');
});

parser.on('data', function(data) {
    let temp = parseFloat(data) + " V";
    console.log(temp);
    io.emit('temp', data);
});




port.on('error', function(err) {
    console.log(err);
});