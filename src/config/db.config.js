const mongoose = require("mongoose");
const {ATLAS_DB_URL,NODE_ENV} = require("../config/server.config");


async function connectTODB(){
    try{
        if(NODE_ENV === "development"){
            await mongoose.connect(ATLAS_DB_URL);
        }else if(NODE_ENV === "production"){
            //connect to the production db url
        }
    }catch(e){
        throw e;
    }
}

module.exports = connectTODB;