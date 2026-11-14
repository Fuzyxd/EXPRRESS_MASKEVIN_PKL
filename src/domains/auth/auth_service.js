import Joi from "joi";
import BaseError from "../../base_classes/base_error.js";
import StatusCodes from "../../constants/status_code.js";


class AuthService {
    async register(data) {

        throw new BaseError({
            code: StatusCodes.BAD_REQUEST.code,
            codeName: StatusCodes.BAD_REQUEST.codeName,
            message: StatusCodes.BAD_REQUEST.message,
            errorName: "Apa coba error error"
        })
    }}

export default new AuthService();

