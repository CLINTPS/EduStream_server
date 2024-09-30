import { Server } from "http";
import { Server as SocketServer } from "socket.io";
import { Socket } from "socket.io";

const connectSocketIo = (server:Server)=> {
    console.log("connectSocketIo server data..",server);

    const io = new SocketServer(server,{
        cors:{
            origin:["http://localhost:5173"],
            methods:["GET","POST"]
        }
    })

    io.on("connection",(socket:Socket)=>{
        console.log('Socket Connected', socket.id);
        socket.on("disconnect",()=>{
            console.log("User Disconnected",socket.id);
            
        })
    })
    
}

export default connectSocketIo;