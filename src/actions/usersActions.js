import { types } from "../types/types";

export const setProfileData = (data) => {
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