const express = require ('express');
const app = express();
const cors = require('cors');
const controller = require('./controller');
app.use(cors());




app.use(
    express.urlencoded((
        exteneded = true
    ))
);
app.use(express.json());

        // API Creation part

app.get('/users',(req,res)=>{
    var resObj=[];
    controller.getUsers((req,res,next) =>{
        res.send();
    })
});

app.post('/createusers', (req,res)=>{
    controller.addUser(req.body,(callback) =>{
        res.send(callback);
    });
});



app.post('/updateusers', (req,res)=>{
    controller.updateUser(req.body,(callback) =>{
        res.send(callback);
    });
});

app.post('/deleteusers', (req,res)=>{
    controller.deleteUser(req.body,(callback) =>{
        res.send(callback);
    });
});
module.exports = app;
