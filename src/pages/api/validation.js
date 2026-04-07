import Joi from "joi";
export function signupvalidation(name, email, password) {
    const schema = Joi.object({
        name: Joi.string().min(3).max(30).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(5).required(),
    });
    const { success, error } = schema.validate({ name, email, password });
    if (error) {
        return { success: false, message: error.details[0].message };
    }
    return { success: true };
}
export const loginvalidation = (email,password) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(5).required(),
    });
    const {success, error} = schema.validate({email,password});
    if (error) {
        return { success: false, message: message };
    }
    return { success: true };
}
