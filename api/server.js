require("dotenv").config();
const app = require("./rest-api/app");
const connectDB = require("./rest-api/config/db");

const http = require("http");
const websocket = require("./sockets-io/websocket");

const server = http.createServer(app);
websocket.init(server);

const serverRun = () => {
  server.listen(process.env.SERVER_PORT, process.env.SERVER_URL, () => {
    console.log(`Express server is running on ${process.env.SERVER_URL} and Port ${process.env.SERVER_PORT}`);
  });
};

const start = async () => {
  try {
    await connectDB();
    serverRun();
  } catch (error) {
    console.error("Error starting server:", error);
  }
};

start();
