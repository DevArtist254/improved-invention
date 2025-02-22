class AppError extends Error {
    constructor() {
        super(message);

        Error.captureStackTrace();
    }
}

export default AppError;