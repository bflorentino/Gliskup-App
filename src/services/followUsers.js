const BaseURL = 'http://localhost:80'

export const getSuggestedUsers = async (user) => {

    const URL = `${BaseURL}/follow/suggestedUsers/${user}`;

    const request = {
        method: 'GET',   
    }

    const res = await fetch(URL, request);
    const {data} = await res.json();
   
    return data
}

export const followUser = async (userOnline, userToFollow) => {

    const URL = `${BaseURL}/follow/${userOnline}/${userToFollow}`;

    const request = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }
    }

    const res = await fetch(URL, request);
    const {data} = await res.json();
    
    return data;
}
