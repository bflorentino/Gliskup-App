import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "../reducers/authReducer";
import { firstTimeInAppReducer } from "../reducers/FirstTimeInAppReducer";
import { interfaceReducer } from "../reducers/interfaceReducer";
import { postBuildingReducer } from "../reducers/postBuildingReducer";
import { postReducer } from "../reducers/postsReducer";

const reducer = combineReducers({
    firstTime: firstTimeInAppReducer,
    authReducer,
    interfaceReducer,
    postEntry: postBuildingReducer,
    posts: postReducer
})

export const store = configureStore({
    reducer
})