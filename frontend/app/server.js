import express from "express";





const server = express();


server.set("port", process.env.PORT || 4310);



export default server;