const express = require("express");
const bodyParser = require("body-parser");

const {PORT} = require("./config/server.config");
const connectToDB = require("./config/db.config");
const errorHandler = require("./utils/errorHandler");
const apiRouter = require("./routes");

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());


app.use("/api",apiRouter);


app.use(errorHandler);
app.listen(PORT,async ()=>{
    try{
        console.log(`Server listening at Port : ${PORT}`);
        await connectToDB();
        console.log("Successfully Connectecd To The DB");
    }catch(e){
        console.log("error during listen Port",e);
    }
})