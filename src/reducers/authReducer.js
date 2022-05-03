import { createReducer } from "@reduxjs/toolkit"
import { types } from "../types/types"

export const authReducer = createReducer({}, (builder) => {

    builder
        .addCase(types.login, (state, action) => ({
            user : action.payload.user,
            token: action.payload.token,    
          })
        )
        .addCase(types.logout, (state, action) => {
            return {}
        })
})