import Swal from "sweetalert2"
import { loginService, signUpService } from "../services/authServices"
import { types } from "../types/types"
import { firstTimeLogged } from "./FirstTimeInAppActions"
import { removeLoading } from "./InterfaceActions"

export const signUp = (user) => {
    return async (dispatch) => {
        signUpService(user).then(res => {
            if(res.status === 201){
                const {data} = res
                dispatch(login(data))
                window.localStorage.setItem("ActiveUser", JSON.stringify({...data}))
                dispatch(firstTimeLogged())
            }else{
                Swal.fire("Error", res.message, 'error');
            }
            dispatch(removeLoading())
        }).catch((e) => {
            Swal.fire("Error", "An error has ocurred", 'error');
            dispatch(removeLoading())
        })
    }
}

export const login = (userInfo) => {
  
    return {
    type: types.login,
    payload: {
        ...userInfo,
        logged: true,
    } 
  }
}

export const logout = () => {
   
    window.localStorage.removeItem("ActiveUser");

    return {
        type : types.logout
    }
}

export const loginWithUserAndPassword = (userName, password) => {

    return async  (dispatch) => {
        loginService({user: userName, password})
        .then(data => {
            if(data.status === 200){
                dispatch(login({...data.data}))
                window.localStorage.setItem("ActiveUser", JSON.stringify({...data.data}))
            }else{
                Swal.fire("Error", data.message, 'error');
            }
            dispatch(removeLoading())
        }).catch((e)=> {
            Swal.fire("Error", "An error has ocurred", 'error');
            dispatch(removeLoading())
        } )
    }
}