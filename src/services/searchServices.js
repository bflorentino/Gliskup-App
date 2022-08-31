const baseURL = process.env.REACT_APP_BASE_URL

export const searchUsersService = async (searchPattern) => {
    
    const URL = `${baseURL}/search/${searchPattern}`;

    const req = {
        method: 'GET'
    }
    const res = await fetch(URL, req);
    const {data} = await res.json();
   
    return data
}