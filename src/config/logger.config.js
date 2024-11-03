//monitoring service provided logger
const winston = require("winston");
const {LOG_DB_URL} = require("./server.config");
require("winston-mongodb");
const {Writable} = require("stream");
const {logToCosmosDB} = require("../clientApis/cosmosClient");





const allowedTransports = [];


//here winston not provide for cosmos db formating so here via stream we own decided how to flow the log context in the cosmos db.
//this is like a format to get relevant data in some format so that we can store in cosmos db.
const customStream = new Writable({
    // highWaterMark: 10, //set buffer size to 1024 bytes(1 KB)
    write(chunk,encoding,callback){
        console.log("chunk",chunk);
        const message = chunk.toString();
        console.log("Log interpreted in custom trasport: ",message);
        logToCosmosDB("error",message);
        callback();
    }
})

//here winston connection done with cosmosdb due to winston not provide cosmos-db like mongodb winston present
allowedTransports.push(new winston.transports.Stream({
    stream: customStream
}))



//I want winston give me a all kind of log in the console.
allowedTransports.push(new winston.transports.Console({
    //here we apply console transport own set of formating that override the default formating which we decide below code.
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp({
            format: "YYYY-MM-DD HH:mm:ss"
        }),
        winston.format.printf((log) => `${log.timestamp} [${log.level}] : ${log.message}`) // here log.level if apply any method which will create a problem.It seems colour will applicable with case-sesitive so error should be look like  "error"ss
    )
}))



//I want winston give me a error log in the mongodb too.
allowedTransports.push(new winston.transports.MongoDB({
    level: "error",
    db: LOG_DB_URL,
    collection: "errorLogs"
}))


//I want winston give me a all kind of level log in the file too.
allowedTransports.push(new winston.transports.File({
    //if I want a specific level log show go in this trasport then we can do use level key 
    filename: "app.log"
}))





//here we define the default formating this default formating will apply to all the transport which do not have their own trasport formating.
const logger = winston.createLogger({
    format: winston.format.combine( 
        //first argument to the combine method is defining how we want the timestamp to come up
        winston.format.timestamp({
            format: "YYYY-MM-DD HH:mm:ss"
        }),
        //second argument to the combine method, which defines what is exactly going to the printed in log
        winston.format.printf((log) => `${log.timestamp} [${log.level.toUpperCase()}] : ${log.message}`)
    ),
    transports: allowedTransports
})

module.exports = logger;
