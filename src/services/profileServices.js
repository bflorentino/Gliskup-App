const baseURL = process.env.REACT_APP_BASE_URL

export const getProfileDataService = async (userRequest, userOnline) => {

    const URL = `${baseURL}/user/profileData/${userRequest}/${userOnline}`;

    const req = {
        method: 'GET'
    }

    const res = await fetch(URL, req);
    const { data } = await res.json()
    return data
}