import { setAvatarProfilePicService } from "../services/authServices"
import { setUploadedProfilePicService } from "../services/authServices"
import { types } from "../types/types"

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
        if(picObject.readedImage === null){
            setAvatarProfilePicService(picObject).then(data => {
                activeUser.profilePicture = picObject.profilePic
            })
        }else{
            setUploadedProfilePicService(picObject).then(data => {
                activeUser.profilePicture = data.data
            })
            window.localStorage.setItem("ActiveUser", JSON.stringify({...activeUser}))
            dispatch(gottenPic(picObject.profilePic))
            dispatch(initConfigurationPassed())
        }
    }
}