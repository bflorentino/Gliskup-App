import Swal from "sweetalert2";
import { getPostsServices, uploadPostService } from "../services/post-services";
import { types } from "../types/types";
import { setClosedPostEntry } from '../actions/postEntryActions'
import { removeLoading } from "./InterfaceActions";

export const uploadPost = (post) => {
    return async (dispatch) =>{
        uploadPostService(post).then(data => {
            Swal.fire('Completed', 'Your Post has been uploaded', 'success')
            dispatch(setClosedPostEntry())
            dispatch(getPosts())
        })
    } 
}

export const getPosts = () => {
    return async (dispatch) => {
        getPostsServices().then(data => {
            dispatch(setPosts(data))
            dispatch(removeLoading())
        })
    }
}

export const setPosts = (posts) => {
    return {
        type: types.feedPosts,
        payload: posts
    }
}