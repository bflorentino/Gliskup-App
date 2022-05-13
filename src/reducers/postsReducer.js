import { createReducer } from "@reduxjs/toolkit";
import { types } from "../types/types";

const initialState = null

export const postReducer = createReducer(initialState, (builder => {
    
    builder
    .addCase(types.feedPosts, (state, action) => { 
        return [...action.payload]
    })
}))