const express = require ('express');
const app = express();
const cors = require('cors');
// const app = require('./app');
const port = 3001;
const host = '127.0.0.1'
const mongoose = require('mongoose');
const router = require('./Router');

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://anjula:anjula@cluster0.qdvd8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

    // connect mongoDB
const connect = async()=>{
    try{
        await mongoose.connect(uri);
        console.log(`connected to mongodb`);

    }catch(error){
        console.log(`MongoDB eroor:`,error);

    }
}

connect();
    // Server Creation
const server = app.listen(port,host,()=>{
    console.log(`Server is listning to: ${server.address().port}`)
});

app.use('/api',router);