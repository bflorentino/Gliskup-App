import { types } from "../types/types";

export const setSuggestedUsers = (suggestedUsers) => {

    return {
        payload : suggestedUsers,
        type: types.setSuggestedUsers
    }
}

export const updateProfileFollow = (followResult) => ({
    type: types.updateFollowingProfileData,
    payload: followResult
})

export const removeOneSuggestedUser = (user) => ({
    type: types.removeSuggestedUser,
    payload: user
})