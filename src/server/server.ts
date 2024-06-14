import express from "express";

// criando inst. básica do servidor

const server = express();

server.get('/', (_, res) => {
    return res.send('Hello World');
});

export { server };