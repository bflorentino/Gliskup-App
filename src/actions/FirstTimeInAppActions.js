import { setAvatarProfilePicService } from "../services/authServices"
import { setUploadedProfilePicService } from "../services/authServices"
import { types } from "../types/types"
import { removeLoading } from "./InterfaceActions"

export const firstTimeLogged = () => {
    return {
        type: types.initConfig
    }
}

export const initConfigurationPassed = () => {

    return {
        type: types.passedInitConfig
    }
}

export const gottenPic = (picturePath) => {
  
    return {
     type: types.picSetted,
     payload : picturePath
 }
}

export const setProfilePicture = (picObject) => {

    return (dispatch) => {
        const activeUser = JSON.parse(window.localStorage.getItem("ActiveUser"))
        let settingPic = null;

        if(picObject.readedImage === null){
            settingPic = setAvatarProfilePicService
        }
        else{       
            settingPic = setUploadedProfilePicService
        }
        settingPic(picObject).then(data => {
            activeUser.profilePicture = picObject.profilePic
            window.localStorage.setItem("ActiveUser", JSON.stringify({...activeUser}))
            dispatch(gottenPic(picObject.profilePic))
            dispatch(initConfigurationPassed())
            dispatch(removeLoading())
        }).catch((e) => {
            dispatch(removeLoading())
        })
    }
}