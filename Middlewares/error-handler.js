const ErrorHandler = (err, req, res, next) => {

    let customError = {
        statusCode: err.statusCode || 500,
        message: err.message || 'Something went wrong. Try again later.'
    };
    //Validate Error
    if(err.name === 'ValidationError'){
        customError.message = Object.values(err.errors).map(e => e.message).join(', ');
        customError.statusCode = 400;
    }

    //Cast Error
    if(err.name === 'CastError'){
        customError.message = `No item found with id: ${err.value}`; 
        customError.statusCode = 404;
    }

    // return res.status(err.statusCode || 500).json({message: err});
    return res.status(customError.statusCode || 500).json({message: customError.message});
}

module.exports = ErrorHandler;