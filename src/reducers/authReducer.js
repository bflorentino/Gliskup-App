import { createReducer } from "@reduxjs/toolkit"
import { types } from "../types/types"

const initialState = {
    logged: false,
    user: null,
    token: null
}

export const authReducer = createReducer(initialState, (builder) => {

    builder
        .addCase(types.login, (state, action) => ({
            user : action.payload.user,
            token: action.payload.token,
            logged: true   
        })
        )   
        .addCase(types.logout, (state, action) => {
            return {
                ...initialState
            }
        })
})