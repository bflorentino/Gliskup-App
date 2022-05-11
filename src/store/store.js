import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "../reducers/authReducer";
import { firstTimeInAppReducer } from "../reducers/FirstTimeInAppReducer";
import { interfaceReducer } from "../reducers/interfaceReducer";
import { postBuildingReducer } from "../reducers/postBuildingReducer";

const reducer = combineReducers({
    firstTime: firstTimeInAppReducer,
    authReducer,
    interfaceReducer,
    postEntry: postBuildingReducer
})

export const store = configureStore({
    reducer
})