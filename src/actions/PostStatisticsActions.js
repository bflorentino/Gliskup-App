import { types } from "../types/types";

export const setOpenStatsWindow = (reactions) => {
    return {
        type: types.postStatiticsWOpen,
        payload: reactions
    }
}

export const setClosedStatsWindow = () => {
    return {
        type: types.postStatiticsWclosed
    }
}

export const setReactionTypeStats = (reactions, reactionType) => {
    return {
        type : types.setReactionsTypeStats,
        payload : {reactions, reactionType}
    }
}