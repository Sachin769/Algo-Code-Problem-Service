const dotenv = require("dotenv");
dotenv.config();

module.exports = {
    NODE_ENV: process.env.NODE_ENV || "development", 
    PORT: process.env.PORT || 3000,
    ATLAS_DB_URL: process.env.ATLAS_DB_URL,
    LOG_DB_URL: process.env.LOG_DB_URL,
    COSMOS_DB_END_POINT: process.env.COSMOS_DB_END_POINT,
    COSMOS_DB_PRIMARY_KEY: process.env.COSMOS_DB_PRIMARY_KEY,
    COSMOS_DB_ID: process.env.COSMOS_DB_ID,
    COSMOS_DB_CONTAINER_ID: process.env.COSMOS_DB_CONTAINER_ID
}