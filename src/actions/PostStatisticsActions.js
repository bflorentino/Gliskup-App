import { types } from "../types/types";

export const setOpenStatsWindow = () => {
    return {
        type: types.postStatiticsWOpen
    }
}

export const setClosedStatsWindow = () => {
    return {
        type: types.postStatiticsWclosed
    }
}