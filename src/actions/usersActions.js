import { types } from "../types/types";
import { getProfileDataService } from "../services/profileServices";

export const getProfileInfo = (user) => {

    return async (dispatch) => {
        getProfileDataService(user).then(data => {
            dispatch(setProfileData(data))
        })
    }
}

const setProfileData = (data) => {
    return {
        type: types.setProfileData,
        payload: data
    }
}

export const removeProfileData = () => {
    return {
        type: types.removeProfileData
    }
}