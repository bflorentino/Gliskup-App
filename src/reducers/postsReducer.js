import { createReducer, current } from "@reduxjs/toolkit";
import { types } from "../types/types";

const initialState = null

export const postReducer = createReducer(initialState, (builder => {
    
    builder
    .addCase(types.getPosts, (state, action) => { 
        return [...action.payload]
    })
    .addCase(types.getUserPosts, (state, action) => {
        return [...action.payload]
    })
    .addCase((types.addPost), (state, action) => {
        return [action.payload,...current(state)]
    })
    .addCase(types.updatePost, (state, action) => {
        return current(state).map((post) =>{
            if(post._id === action.payload.postId){
                return{
                    ...post, 
                    reacted : action.payload.reacted,

                    reactions : action.payload.reacted 
                                ? [...post.reactions, action.payload] 
                                : post.reactions.filter(reaction => reaction.user.user !== action.payload.user),
                    
                    ownReactionType: action.payload.reactionType
                }
            } 
            else{
                return post  
            }}
        )
    })
    .addCase(types.removePost, (state, action) => {
        return current(state).filter(post => action.payload !== post._id)
    })
    .addCase(types.clearPosts, (state, action) => {
        return initialState
    })
}))