import validator from 'validator';

export const validateSignUpForm = (form) => {

    if (form.name === "") return ["Name is required", 0] 
    if (form.lastName === "") return ["Last Name is required", 1] 
    if (!validator.isEmail(form.email)) return ["Not a valid email", 2]
    if(form.email === "") return ["Email is required", 2] 
    if(form.phone !== "" && !validator.isMobilePhone(form.phone)) return ["Invalid phone number", 3]
    if(form.user === "") return ["User Name is required", 4] 
    if(form.password === "") return ["Password is required", 5] 
    if(form.password !== form.password2) return ["Passwords must be equal", 5] 
    if(form.password.length < 6) return ["Passwords must be at least 6 chars", 5]

    return true
} 