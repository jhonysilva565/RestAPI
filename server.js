import http from 'http'
import { app } from "./app.js"

const port = process.env.PORT || 4567
const server = http.createServer(app)

server.listen(port, () => {
    console.log('App rodando');
})

