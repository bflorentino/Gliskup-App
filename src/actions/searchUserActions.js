import { searchUsersService } from "../services/searchServices";
import { types } from "../types/types";

export const getUsersToSearch = (searchPattern) => {
    return async (dispatch) => {
        searchUsersService(searchPattern).then(data => {
            dispatch(setUsersToSearch(data))
        })
    }
}

export const removeUsersToSearch = () => {
    return  {
        type: types.removeUsersToSearch
    }
}

export const setUsersToSearch = (users) => {
    return {
        type: types.setUsersToSearch,
        payload : users,
    }
}