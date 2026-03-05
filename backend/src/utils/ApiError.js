class ApiError extends Error{
    constructor(statusCode,message){
        super(message);
        this.statusCode = statusCode;
        this.success = false;
    }
}


//check in video of api response by chai aur 

export {ApiError};