import Joi from 'joi'

export const signupValidation = Joi.object({
    firstName: Joi
    .string()
    .required(),

    lastName: Joi
    .string()
    .required(),

    email: Joi
    .string()
    .email()
    .required(),

    password: Joi
    .string()
    .pattern(new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/))
    .required(),
    confirmPassword:Joi
    .string()
    .required(),

    otp:Joi
    .string()
    .pattern(new RegExp(/^\d{4}$/))
    .required()
})