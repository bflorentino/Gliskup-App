import { getSuggestedUsers } from "../services/followUsers";
import { types } from "../types/types";

export const setSuggestedUsersAsync = (user) => {

    return async (dispatch) => {
        getSuggestedUsers(user)
            .then(data => {
                dispatch(setSuggestedUsers(data))
            })
    }
}

const setSuggestedUsers = (suggestedUsers) => {

    return {
        payload : suggestedUsers,
        type: types.setSuggestedUsers
    }

}