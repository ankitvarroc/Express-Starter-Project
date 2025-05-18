const express = require('express');
//const bodyParser = require('body-parser')

const ServerConfig = require('./config/serverConfig');
const connectDB = require('./config/dbConfig');


const app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.text());
// app.use(bodyParser.urlencoded());

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({extended :true }));

app.post('/ping',( req , res) => {
    console.log(req.body);
    return res.json({message: "pong"});
})

app.listen(ServerConfig.PORT, async () => {
    await connectDB();
    console.log(`server started at port ${ServerConfig.PORT}...`);
});