// const express = require('express');
// const app = express();    
// const http = require('http');          // <-- require http module
// const { Server } = require('socket.io'); // <-- require socket.io


//              // <-- define app first
// const server = http.createServer(app); // <-- then create server

// const io = new Server(server);         // <-- pass server to Socket.IO
// app.use(express.static('public'));

// // Socket.IO connection check (you can remove this later)
// // io.on("connection", (socket) => {
// //     console.log("A user connected");
// // });

// // Express route
// // app.get('/', (req, res) => {
// //     res.sendFile(__dirname + '/public/index.html');
// // });


// // Start server
// server.listen(3000, () => {
//     console.log('Server running on port 3000');
// });

// io.on('connection', (socket) => {
//     console.log('A user connected');

//     socket.on('chat message', (msg) => {
//         io.emit('chat message', msg); // send to all connected clients
//     });
// });


const express = require('express');
const app = express();    
const http = require('http');          
const { Server } = require('socket.io');

const server = http.createServer(app); 
const io = new Server(server);         

// Serve public folder
app.use(express.static('public'));

// Start server
server.listen(3000, () => {
    console.log('Server running on port 3000');
});

// Socket.IO
io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('chat message', (data) => {
        io.emit('chat message', data); // broadcast object to all
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});
