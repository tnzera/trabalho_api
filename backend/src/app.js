import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import routes from './routes';




class App{
    
    constructor(){
        this.server = express();

        mongoose.connect('mongodb+srv://tnalbornoz:devhouse@devhouse.i8j1vyq.mongodb.net/?retryWrites=true&w=majority',{
            
        });

        this.middleweres();
        this.routes();
    }

   
    middleweres(){

        this.server.use(
            '/files',
            express.static(path.resolve(__dirname, '..','uploads'))
        );

        this.server.use(express.json());

    }

    routes(){
        this.server.use(routes);
    }

}



export default new App().server;
