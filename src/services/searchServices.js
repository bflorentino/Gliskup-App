const BaseURL = 'http://localhost:80'

export const searchUsersService = async (searchPattern) => {
    
    const URL = `${BaseURL}/search/${searchPattern}`;

    const req = {
        method: 'GET'
    }
    const res = await fetch(URL, req);
    const {data} = await res.json();
   
    return data
}