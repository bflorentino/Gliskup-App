import { types } from "../types/types"

export const setLoading = () => {
    return{
        type: types.loading
    }
} 

export const removeLoading = () => {
    return{
        type: types.removeLoading
    }
} 