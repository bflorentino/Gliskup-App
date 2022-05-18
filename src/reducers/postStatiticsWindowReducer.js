import { createReducer } from "@reduxjs/toolkit";
import { types } from "../types/types";

const initialState = {openW: false}

export const PostStatisticsWindowReducer = createReducer(initialState, (builder) => {
    builder
    .addCase(types.postStatiticsWOpen, (state, action) => {
        return {openW : true}
    })
    .addCase(types.postStatiticsWclosed, (state, action) => {
        return {openW : false}
    })
})