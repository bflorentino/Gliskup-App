import { types } from "../types/types";

export const setOpenPostEntry = () => {
    return {
        type: types.openPostEntry
    }
}

export const setClosedPostEntry = () => {
    return {
        type: types.closePostEntry
    }
}