const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


// asign port number
const port = 4001; 

// asign express() to varaible app
const app = express(); 


// =================== imported routes ====================

// =================== end of imported routes ====================


//MongoDB connections
// [Mongoose] DeprecationWarning: Mongoose: the `strictQuery` option will be switched back [solved]
mongoose.set('strictQuery', true);

//connecting to the database [MongoDB]
mongoose.connect('mongodb+srv://admin:admin@batch245-espiritu.dgm8gby.mongodb.net/chat-foneAPI?retryWrites=true&w=majority', 
    {
        useNewUrlParser:true,
        useUnifiedTopology: true
    }
);

let db = mongoose.connection;
// connection error
db.on("error", console.error.bind(console, "Connection error"));
// connection success
db.once("open", ()=>console.log(`We're connected to the database cloud!`));


//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());


// request routes bellow here



// listen app
app.listen(port, ()=> console.log(`Server is running at server: ${port}`))