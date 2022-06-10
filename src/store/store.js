import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "../reducers/authReducer";
import { firstTimeInAppReducer } from "../reducers/FirstTimeInAppReducer";
import { interfaceReducer } from "../reducers/interfaceReducer";
import { postBuildingReducer } from "../reducers/postBuildingReducer";
import { postReducer } from "../reducers/postsReducer";
import { PostStatisticsWindowReducer } from "../reducers/postStatiticsWindowReducer";
import { searchReducer } from "../reducers/searchReducer";
import { usersReducer } from "../reducers/usersReducer";

const reducer = combineReducers({
    firstTime: firstTimeInAppReducer,
    authReducer,
    interfaceReducer,
    postEntry: postBuildingReducer,
    posts: postReducer,
    postStatsWindow: PostStatisticsWindowReducer,
    usersReducer,
    searchReducer
})

export const store = configureStore({
    reducer
})