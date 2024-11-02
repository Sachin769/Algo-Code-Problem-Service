const BaseError = require("./base.error");

class BadRequestError extends BaseError{
    constructor(propertyName){
        super("BadRequest Error",400,`Strucuture Not Provied ${propertyName} provied`,{});
    }
}


module.exports = BadRequestError;