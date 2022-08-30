import { createReducer } from "@reduxjs/toolkit"
import { types } from "../types/types"

const initialState = {
    logged: false,
    user: null,
    name: null,
    lastName: null,
    token: null,
    profilePic: null
}

export const authReducer = createReducer(initialState, (builder) => {

    builder
        .addCase(types.login, (state, action) => {
          return { 
            user : action.payload.user,
            token: action.payload.token,
            name: action.payload.name,
            lastName: action.payload.lastName,
            profilePic : action.payload.profilePicture,
            presentation: action.payload.presentation,
            followers: action.payload.followers,
            followed: action.payload.followed,
            logged: true,
          }   
        }
        )   
        .addCase(types.logout, (state, action) => {
            return {
                logged: false,
                user: null,
                name: null,
                lastName: null,
                token: null,
                profilePic : null
            }
        })
        .addCase(types.picSetted, (state, action) => {
            return{
            ...state,
            profilePic: action.payload
            }
        })
})