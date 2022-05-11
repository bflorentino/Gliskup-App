import { createReducer } from "@reduxjs/toolkit";
import { types } from "../types/types";

const initialState = {postBuilderOpened : false}

export const postBuildingReducer = createReducer(initialState, (builder) => {
    builder
    .addCase(types.openPostEntry, (state, action) => {
        return {postBuilderOpened : true}
    })
    .addCase(types.closePostEntry, (state, action) => {
        return {postBuilderOpened: false}
    })
}) 