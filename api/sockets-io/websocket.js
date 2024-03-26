// const express = require("express");
// require("dotenv").config();
// const connectDB = require("./config/db");
// const http = require("http");
// const { Server } = require("socket.io");

// const app = express();
// const server = http.createServer(app);
// const io = new Server(server, {
//   cors: {
//     origin: "http://localhost:3000", // Adjust the URL to match your React app
//     methods: ["GET", "POST"],
//   },
// });'
const socketIO = require("socket.io");
let io;

function init(server) {
  io = socketIO(server);

  // Handle connection event
  io.on("connection", (socket) => {
    console.log("A user connected");

    // Handle login event
    socket.on("login", (data) => {
      console.log("socket", data);
      socket.username = data.name;

      // Push the connected user to the clients array
      clients.push({ id: socket.id, name: data.name });

      // Broadcast to all clients that a new user has logged in
      io.emit("user-info", {
        id: socket.id,
        name: data.name,
      });

      // Emit the updated list of active clients to all clients
      io.emit("active-clients", clients);
    });

    // Handle disconnect event
    socket.on("disconnect", () => {
      console.log("User disconnected");

      // Remove the disconnected user from the clients array
      clients = clients.filter((client) => client.id !== socket.id);

      // Emit the updated list of active clients to all clients
      io.emit("active-clients", clients);
    });
  });

  // Export the `io` object for use in other modules
}

function getIO() {
  if (!io) {
    throw new Error("Socket.IO not initialized!");
  }
  return io;
}

module.exports = {
  init,
  getIO,
};
