import statusCodes from "../constants/status_code.js";
import BaseError from "../base_classes/base_error.js";


const errorHandler = (err, req, res, _next) => {
    const statusCode = Object.values(statusCodes).find((
        (code) => code.message === err.statusCode));

    if (err.name === "ValidationError") {
        const errorObj = {};

        for (const error of error.details) {
            errorObj[error.path] = error.message;
        }

        if (err.source === "query") {
            return res.status(statusCodes.INVALID_PARAMS.code).json({
                code: statusCodes.INVALID_PARAMS.code,
                status: statusCodes.INVALID_PARAMS.codeName,
                message: statusCodes.INVALID_PARAMS.message,
                pagination: null,
                data: null,
                error: {
                    name: err.name,
                    message: err.message,
                    validation: errorObj,
                },
            });
        }

        return res.status(statusCodes.INVALID_PARAMS.code).json({
            code: statusCodes.INVALID_PARAMS.code,
            status: statusCodes.INVALID_PARAMS.codeName,
            message: statusCodes.INVALID_PARAMS.message,
            pagination: null,
            data: null,
            error: {
                name: err.name,
                message: err.message,
                validation: errorObj,
            },
        });
    }

    if (err.name === "multerError") {
        return res.status(statusCodes.BAD_REQUEST.code).json({
            code: statusCodes.BAD_REQUEST.code,
            status: statusCodes.BAD_REQUEST.codeName,
            message: statusCodes.BAD_REQUEST.message,
            pagination: null,
            data: null,
            error: {
                name: err.name,
                message: err.message,
                validation: errorObj,
            },
        });
    }


    if (err instanceof BaseError) {
        return res.status(err.statusCode).json({
            code: err.statusCode,
            status: err.errorCode,
            message: err.message,
            pagination: null,
            data: null,
            error: {
                name: err.errorName,
                message: err.message,
                validation:null,
            },
        });

    }
    console.error("❎ error",err);

    return res.status(statusCodes.INTERNAL_SERVER_ERROR.code).json({
        code: statusCodes.INTERNAL_SERVER_ERROR.code,
        status: statusCodes.INTERNAL_SERVER_ERROR.codeName,
        message: statusCodes.INTERNAL_SERVER_ERROR.message,
        pagination: null,
        data: null,
        error: {
            name : err.name,
            message: err.message,
            validation:null,
        },
    });
}   

export default errorHandler;