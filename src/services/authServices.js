const BaseURL = 'http://localhost:80'

export const signUpService = async (user) => {

    const URL = `${BaseURL}/auth/user`;

    const res = await fetch(URL,  {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            },
        body : JSON.stringify(user)
    });
    const  data  = await res.json()
    return data;
}

export const loginService = async(user) => {

    const URL = `${BaseURL}/auth/user/login`;

    const req = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            },
        body : JSON.stringify(user)
    }

    const res = await fetch(URL, req);
    const data = await res.json()
    return data
}