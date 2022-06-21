// import Swal from "sweetalert2";
import { getPostsServices, 
        getUserPostsServices, 
        removePostService, 
        uploadPostService } from "../services/post-services";
import { types } from "../types/types";
import { setClosedPostEntry } from '../actions/postEntryActions'
import { removeLoading } from "./InterfaceActions";
import { reactionService, removeReactionService } from "../services/reactions-Services";
import Swal from "sweetalert2";

// Asynchronous actions 
export const uploadPost = (post) => {
    return async (dispatch) =>{
        uploadPostService(post).then(data => {
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

export const getUserPosts = (userRequestFrom, userRequestTo) => {
    return async (dispatch) => {
        getUserPostsServices(userRequestFrom, userRequestTo).then(data => {
            dispatch(setUserPosts(data))
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

export const removePost = (postId, imagePath) => {
    return async(dispatch) => {
        removePostService({postId, imagePath})
          .then(res => {
              if(res.success){
                  Swal.fire("Post Deleted", "Post has been deleted", "success" )
                  dispatch(setPostRemoved(postId))
              }else{
                Swal.fire("Error", "Post could not be deleted", "error" )
              }
            })
    }
}

// Synchronous actions
export const setPosts = (posts) => {
    return {
        type: types.getPosts,
        payload: posts
    }
}

export const setUserPosts = (posts) => {
    return {
        type: types.getUserPosts,
        payload: posts
    }
}

export const setNewPost = (post) => {
    
    return {
        type: types.addPost,
        payload: post
    }
}

export const setPostRemoved = (postId) => (
    {
        type: types.removePost,
        payload: postId
    }
) 

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