import { createReducer } from "@reduxjs/toolkit"
import { types } from "../types/types"

const initialState = { loading: false}

export const interfaceReducer = createReducer(initialState, builder => {
    
    builder
    .addCase(types.loading, (state, action) => {
        return {loading: true}
    })

    .addCase(types.removeLoading, (state, action) => {
        return initialState
    })

} )