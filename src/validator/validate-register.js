import Joi from "joi"

const registerSchema = Joi.object({
    email: Joi.string().email({tlds: false}).message({
        "any.required": "Email is required",
        "string.email": "Must be valid email",
        "string.empty": "Email is required"
    }),
    password: Joi.string().alphanum().min(6).required().trim().message({
        "string.empty": "Password is required",
        "string.alphanum": "Password must containnumber or alphabet",
        "string.min": "Password must have at least 6 characters"
    }),
    confirmPassword: Joi.string().valid(Joi.ref("password")).required().trim().message({
        "any.only": "Password confirm password not match",
        "string.empty": "Confirm password is required"
    })
})

const validateRegister = input => {
    const {error} = registerSchema.validate(input, {
        abortEarly: false
    })
    if (error) {
        const result = error.details.reduce((acc,el) => {
            acc[el.path[0]] = el.message;
            return acc
        },{})
        return result
    }
}

export default validateRegister