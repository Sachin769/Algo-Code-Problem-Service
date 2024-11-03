const { CosmosClient } = require("@azure/cosmos")
const { COSMOS_DB_END_POINT, COSMOS_DB_PRIMARY_KEY, COSMOS_DB_ID, COSMOS_DB_CONTAINER_ID } = require("../config/server.config")

const endPoint = COSMOS_DB_END_POINT; // this is the cosmos hosted server end point
const key = COSMOS_DB_PRIMARY_KEY; // this is present at key section - primary key. This define a particular major part of DB.
const databaseId = COSMOS_DB_ID; // this is my actual database name.
const containerId = COSMOS_DB_CONTAINER_ID; // this is my actual table name of the particular databaseId .

//this below code only open when we got cosmos db credential
// const client = new CosmosClient({endPoint,key});
// const database = client.database(databaseId);
// const container = database.container(containerId);


//here we have a function available which when call we add to something in cosmos
async function logToCosmosDB(level,message){
    try{
        //strucutre of the doucment we will store in cosmos db.

        //this below code only open when we got cosmos db credential

        // await container.items.create({
        //     timeStamp: new Date().toString(),
        //     level:level,
        //     message: message
        // })
        console.log("Log entry Created in Cosmos DB");
    }catch(e){
        console.log("error logging to cosmod DB"); 
    }
}


module.exports = {
    logToCosmosDB
};
//export in object instead of directly function there might be chances cosmos new function introduct in this file which I want to expose.