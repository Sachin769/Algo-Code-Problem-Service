const BaseError = require("./base.error");

class InternalServerError extends BaseError{
    constructor(){
        super("Internal Server Error",500,"Something Went Wrong !!",{});
    }
}

module.exports = InternalServerError;