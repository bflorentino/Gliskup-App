import Swal from "sweetalert2";
import { getPostsServices, uploadPostService } from "../services/post-services";
import { types } from "../types/types";
import { setClosedPostEntry } from '../actions/postEntryActions'
import { removeLoading } from "./InterfaceActions";
import { reactionService, removeReactionService } from "../services/reactions-Services";

export const uploadPost = (post) => {
    return async (dispatch) =>{
        uploadPostService(post).then(data => {
            Swal.fire('Completed', 'Your Post has been uploaded', 'success')
            dispatch(setClosedPostEntry())
            dispatch(setNewPost(data))
            dispatch(removeLoading())
        })
    } 
}

export const getPosts = (userRequest) => {
    return async (dispatch) => {
        getPostsServices(userRequest).then(data => {
            dispatch(setPosts(data))
            dispatch(removeLoading())
        })
    }
}

export const reactToPost = (reaction) => {
    return async(dispatch) => {
        reactionService(reaction).then(data => {
            dispatch(addReactionToPost(data))
        })
    }
}

export const removeReactionToPost = (reaction) => { 
    return async(dispatch) => {
        removeReactionService(reaction).then(data=> {
            dispatch(removeReactionFromPost(data, reaction.user))
        })
    }
}

export const setPosts = (posts) => {
    return {
        type: types.getPosts,
        payload: posts
    }
}

export const setNewPost = (post) => {
    
    return {
        type: types.addPost,
        payload: post
    }
}

export const addReactionToPost = (post) => {
    return {
        type: types.updatePost,
        payload : post
    }
}

export const removeReactionFromPost = (post, user) => {

    return {
        type: types.updatePost,
        payload : {
            ...post,
            user
        } 
    }
}

export const clearPosts = () => {
    return {
        type: types.clearPosts
    }
}