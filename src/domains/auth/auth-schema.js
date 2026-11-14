import Joi from "joi";

const registerSchema = Joi.object({
    email: Joi.string().email().required().messages({
        "string.empty": "Email is required.",
        "string.email": "Email must be a valid email address.",
    }),
    otp_verification: Joi.string().required().min(5).messages({
        "string.empty": "OTP verification is required.",
    }),
    password: Joi.string()
        .required()
        .min(8)
        .pattern(/^(?=.[A-Z])(?=.[^a-zA-Z0-9]).{8,}$/)
        .messages({
            "string.empty": "Passw2ord is required.",
            "string.min": "Password must be at least 8 characters long.",
            "string.pattern.base":
                "Password must be at least 8 characters long, contain at least 1 uppercase letter, and 1 special character.",
        }),
    password_confirmation: Joi.string()
        .required()
        .valid(Joi.ref("password"))
        .messages({
            "string.empty": "Password confirmation is required.",
            "any.only": "Password confirmation does not match password.",
        }),
});

export { registerSchema };
