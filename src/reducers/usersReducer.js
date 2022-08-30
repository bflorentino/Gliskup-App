import { createReducer, current } from "@reduxjs/toolkit";
import { types } from "../types/types";

const initialState = null;

export const usersReducer = createReducer(initialState, builder => {
    (builder)
    .addCase(types.setProfileData, (state, action) => {
        return {...action.payload}
    })
    
    .addCase(types.removeProfileData, (state, action) => {
        return initialState;
    })

    .addCase(types.updateFollowingProfileData, (state, action) => {
        
        if(!action.payload.isOwnProfile)
            return {...current(state), 
                followers: action.payload.followResult ? current(state).followers + 1 : current(state).followers - 1, 
                followedByUserOnline: action.payload.followResult
            }
        
        return {
            ...current(state), 
                followed: action.payload.followResult ? current(state).followed + 1 : current(state).followed - 1, 
                followedByUserOnline: action.payload.followResult
        }
    })
})