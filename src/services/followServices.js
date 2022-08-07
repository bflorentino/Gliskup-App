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