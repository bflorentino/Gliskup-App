import { createReducer } from "@reduxjs/toolkit";
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
})