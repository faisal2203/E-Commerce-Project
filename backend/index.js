const express = require('express');
const app = express();

const http = require("http");
const { Server } = require('socket.io');
const cors = require('cors');

app.use(cors());

const server = http.createServer(app);

let totalStock = 100; // Initial total stock
let soldStock = 0; // Initial sold stock

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
});

io.on('connection', (socket) => {
    // Send initial stock data to the client
    socket.emit('initialStockData', { totalStock, soldStock });

    // Handle stock updates from the client
    socket.on('sellStock', (data) => {
        if (totalStock > 0) {
            totalStock -= data.message;
            soldStock += data.message;

            // Broadcast updated stock data to all connected clients
            io.emit('updateStockData', { totalStock, soldStock });
        }
    });

    socket.on('addStock', (data) => {
        totalStock += data.message

        // Broadcast updated stock data to all connected clients
        io.emit('updateStockData', { totalStock, soldStock });
    });
});



server.listen(3001, () => {
    console.log("SERVER IS RUNNING")
});