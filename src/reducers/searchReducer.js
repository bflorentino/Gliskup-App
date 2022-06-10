import { createReducer } from "@reduxjs/toolkit";
import { types } from "../types/types";

const initialState = null;

export const searchReducer = createReducer(initialState, builder => {

    (builder)
    .addCase(types.setUsersToSearch, (state, action) => {
        return [...action.payload]
    })
    .addCase(types.removeUsersToSearch, (state, action) => {
        return initialState
    })
} )