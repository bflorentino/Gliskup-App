import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "../reducers/authReducer";
import { firstTimeInAppReducer } from "../reducers/FirstTimeInAppReducer";

const reducer = combineReducers({
    firstTime: firstTimeInAppReducer,
    authReducer
})

export const store = configureStore({
    reducer
})