import { createReducer, current } from "@reduxjs/toolkit";
import { types } from "../types/types";

const initialState = {openW: false}

export const PostStatisticsWindowReducer = createReducer(initialState, (builder) => {
    builder
    .addCase(types.postStatiticsWOpen, (state, action) => {
        return {
                openW : true, 
                reactions: action.payload,
                reactionsToDisplay : action.payload
            }
    })
    .addCase(types.postStatiticsWclosed, (state, action) => {
        return {openW : false}
    })
    .addCase(types.setReactionsTypeStats, (state, action) => {
        return { ...current(state),
                openW: true, 
                reactionsToDisplay: action.payload.reactionType === 0 
                                    ?current(state).reactions  
                                    :current(state).reactions.filter(reaction => 
                                                reaction.reactionType === action.payload.reactionType)
        }
    })
})