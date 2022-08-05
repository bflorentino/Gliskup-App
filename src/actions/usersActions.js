import { types } from "../types/types";
import { getProfileDataService } from "../services/profileServices";

export const getProfileInfo = (userRequest, userOnline) => {

    return async (dispatch) => {
        getProfileDataService(userRequest, userOnline).then(data => {
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