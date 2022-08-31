const baseURL = process.env.REACT_APP_BASE_URL

export const uploadPostService = async (post) => {

    const URL = `${baseURL}/post/upload`;

    const dataToSend = new FormData();

    dataToSend.append('text', post.text);
    dataToSend.append('user', post.user);
    dataToSend.append('image', post.image);

    const req = {
        method: 'POST',
        body : dataToSend
    }

    const res = await fetch(URL, req);
    const { data } = await res.json()
    return data
}

export const getPostsServices = async (userRequest)  => {

    const URL = `${baseURL}/post/view/${userRequest}`;

    const req = {
        method : 'GET'
    }

    const res = await fetch(URL, req);
    const { data } = await res.json()
    return data
}

export const getUserPostsServices = async (userRequestFrom, userRequestTo)  => {

    const URL = `${baseURL}/post/viewProfile/${userRequestFrom}/${userRequestTo}`;

    const req = {
        method : 'GET'
    }

    const res = await fetch(URL, req);
    const { data } = await res.json()
    return data
}

export const removePostService = async(post) => {

    const URL = `${baseURL}/post/delete`;

    const req = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(post)
    }

    const res = await fetch(URL, req);
    return await res.json()
}