import { createReducer } from "@reduxjs/toolkit"
import { types } from "../types/types"

const initialState = {firstTime: false}

export const firstTimeInAppReducer = createReducer(initialState, (builder => {

    builder
    .addCase(types.initConfig, (state, action) => ({firstTime: true}))
    .addCase(types.passedInitConfig, (state, action) => ({firstTime: false}))
    })
)