import { types } from "../types/types";

export const setSuggestedUsers = (suggestedUsers) => {

    return {
        payload : suggestedUsers,
        type: types.setSuggestedUsers
    }
}

export const updateProfileFollow = (followResult, isOwnProfile) => ({
    type: types.updateFollowingProfileData,
    payload: {followResult, isOwnProfile}
})

export const removeOneSuggestedUser = (user) => ({
    type: types.removeSuggestedUser,
    payload: user
})

export const followSuggestedUser = (user) => ({
    type: types.followSuggestedUser,
    payload: user
})