const BaseError = require("./base.error");

class NotImplementedError extends  BaseError{
    constructor(methodName){
        super("Not Implemented",501,`Not Implemented ${methodName}`,{});
    }
}

module.exports = NotImplementedError;