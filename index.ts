import Server from "./classes/server";

import mongoose from 'mongoose'
import bodyParser from 'body-parser'

import userRoutes from "./routes/usuario";
import postRoutes from "./routes/post";

const server = new Server();

server.app.use( bodyParser.urlencoded({
    extended:true
}));

server.app.use( bodyParser.json());

server.app.use( '/user', userRoutes )
server.app.use( '/posts', postRoutes )

mongoose.connect('mongodb://localhost:27017/fotosgram',{
    useNewUrlParser: true,
    useCreateIndex: true
}, (err) =>{
    if (err ) throw err;

    console.log('base de  datos online');

})

server.start(()=>{
    console.log(`Servidor corriendo en puerto ${server.port} `);
});