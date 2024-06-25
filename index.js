// server.js
const express = require("express");
const WebSocket = require("ws");
const axios = require("axios");
const dotenv = require("dotenv");
const http = require("http");
const { getTradeData } = require("./helper.js/utils");

dotenv.config();

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("WebSocket server with Express");
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

const wss = new WebSocket.Server({ server });
wss.on('connection', function connection(ws) {
  ws.on('message', async function incoming(message) {
    const messageString = message.toString();
    if (messageString === "Trade") {
     const tradeResponse = await getTradeData();
     ws.send(JSON.stringify(tradeResponse));
    }
  });
});

