const baseURL = 'http://localhost:80'

export const getProfileDataService = async (userRequest) => {

    const URL = `${baseURL}/user/profileData/${userRequest}`;

    const req = {
        method: 'GET'
    }

    const res = await fetch(URL, req);
    const { data } = await res.json()
    return data
}