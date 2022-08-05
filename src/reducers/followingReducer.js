import { createReducer, current } from "@reduxjs/toolkit"
import { types } from "../types/types"

const initialState = []

export const followingReducer = createReducer(initialState, (builder => {

    builder
    .addCase(types.setSuggestedUsers, (state, action) => {
        return [...action.payload]
    })
    .addCase(types.removeSuggestedUser, (state, action) => {
        return current(state).filter(user => user.user !== action.payload)
    })
}))