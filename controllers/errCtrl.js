const errorHandler = (err, req, res, next) => {
    console.error(err.stack);

    err.status = err.status || "error";
    err.statusCode = err.statusCode || 500;

    if (req.headers.accept && req.headers.accept.includes("application/json")) {
        return res.status(statusCode).json({ status: "error", message });
    }

    res.status(err.statusCode).render("error", {
        title: err.status,
        message: err.message || "Something went wrong!",
        status: err.statusCode
    })
}

export default errorHandler;