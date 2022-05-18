import Swal from "sweetalert2";
import { getPostsServices, uploadPostService } from "../services/post-services";
import { types } from "../types/types";
import { setClosedPostEntry } from '../actions/postEntryActions'
import { removeLoading } from "./InterfaceActions";
import { reactionService } from "../services/reactions-Services";

export const uploadPost = (post) => {
    return async (dispatch) =>{
        uploadPostService(post).then(data => {
            Swal.fire('Completed', 'Your Post has been uploaded', 'success')
            dispatch(setClosedPostEntry())
            dispatch(getPosts(post.user))
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
            dispatch(updatePost(data))
        })
    }
} 

export const setPosts = (posts) => {
    return {
        type: types.getPosts,
        payload: posts
    }
}

export const updatePost = (post) => {
    return {
        type: types.updatePost,
        payload : post
    }
}