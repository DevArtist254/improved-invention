class AppError extends Error {
    constructor(message, statusCode) {
        super(message);
        
        this.isOperation = true;
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
        this.statusCode = statusCode;

        Error.captureStackTrace(this, this.constructor);
    }
}

export default AppError;