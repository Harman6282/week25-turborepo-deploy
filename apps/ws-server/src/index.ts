import {WebSocketServer} from "ws";


const server = new WebSocketServer({
    port: 3001
});

server.on("connection", (socket) => {
     socket.send("connected via websocket server")
})