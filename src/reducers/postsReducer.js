import { createReducer } from "@reduxjs/toolkit";
import { types } from "../types/types";

const initialState = null

export const postReducer = createReducer(initialState, (builder => {
    
    builder
    .addCase(types.getPosts, (state, action) => { 
        return [...action.payload]
    }) 

    .addCase(types.updatePost, (state, action) => {

       return state.map((post)=> {
            if(post._id === action.payload._id){
                return {
                    ...post, 
                    reacted : action.payload
                }
            }else{
                return post
            }
        })
    })

    .addCase(types.removePost, (state, action) => {

    })

    .addCase((types.addPost), (state, action) => {

    })
}))