const baseURL = process.env.REACT_APP_BASE_URL

export const signUpService = async (user) => {

    const URL = `${baseURL}/auth/user`;

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

    const URL = `${baseURL}/auth/user/login`;

    const req = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            },
        body : JSON.stringify(user)
    }

    const res = await fetch(URL, req);
    const data = await res.json();
    return data
}

export const setUploadedProfilePicService = async (picObject) => {

    const URL = `${baseURL}/auth/user/setUploadedPic`

    const dataToSend = new FormData();
    dataToSend.append("profilePicture", picObject.readedImage);
    dataToSend.append("user", picObject.user);
    dataToSend.append("presentation", picObject.presentation)

    const res = await fetch(URL, {
        method: 'PUT', 
        body : dataToSend
    });

    return res
}

export const setAvatarProfilePicService = async (picObject) => {
   
    const URL = `${baseURL}/auth/user/setAvatarPic`

    const res = await fetch(URL, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body : JSON.stringify(picObject)
    });
    
    return res
}