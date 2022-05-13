const baseURL = 'http://localhost:80'

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
    const data = await res.json()
    return data
}

export const getPostsServices = async ()  => {

    const URL = `${baseURL}/post/view`;

    const req = {
        method : 'GET'
    }

    const res = await fetch(URL, req);
    const { data } = await res.json()
    return data
}