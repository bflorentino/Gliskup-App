const baseURL = 'http://localhost:80';

export const reactionService = async (reaction) => {

    const URL = `${baseURL}/reaction/react`;

    const req = {
        method : 'POST',
        headers: {
            'Content-Type': 'application/json',
            },
        body : JSON.stringify(reaction)
    }

    const res = await fetch(URL, req);
    const { data } = await res.json()
    return data
} 

export const removeReactionService = async (reaction) => {

    const URL = `${baseURL}/reaction/remove`;

    const req = {
        method : 'POST',
        headers: {
            'Content-Type': 'application/json',
            },
        body : JSON.stringify(reaction)
    }

    const res = await fetch(URL, req);
    const {data} = await res.json();
    
    return data;
} 