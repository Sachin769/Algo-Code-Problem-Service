const BaseError = require("./base.error");

class NotFoundError extends BaseError{
    constructor(resourceName,resourceValue){
        super("NotFound",404,`The requested Resource : ${resourceName} with value ${resourceValue} not found`,{});
    }
}

module.exports = NotFoundError;