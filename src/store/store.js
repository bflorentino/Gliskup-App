import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "../reducers/authReducer";

const reducer = combineReducers({
    authReducer
})

export const store = configureStore({
    reducer
})