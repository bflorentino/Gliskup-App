import Swal from "sweetalert2"
import { loginService, signUpService } from "../services/authServices"
import { types } from "../types/types"

export const signUp = (user) => {
    return async (dispatch) => {
        signUpService(user).then(data => {
            if(data.errorStatus === null){
                
                dispatch(login(data.data.user, data.data.email, data.data.token))
                window.localStorage.setItem("ActiveUser", JSON.stringify({user: data.data.user, 
                                                                          email: data.data.email, 
                                                                        token: data.data.token}))
            }else{
                Swal.fire("Error", data.message, 'error');
            }
        }).catch((e) => {
            Swal.fire("Error", "An error has ocurred", 'error');
        })
    }
}

export const login = (userName, email, token) => ({
    type: types.login,
    payload: {
        userName,
        email, 
        token,
        logged: true
    } 
})

export const loginWithUserAndPassword = (userName, password) => {

    return async  (dispatch) => {
        loginService({user: userName, password})
        .then(data => {
            if(data.errorStatus === null){
                dispatch(login(userName, password))

                console.log(data)

                window.localStorage.setItem("ActiveUser", JSON.stringify({user: data.data.user, 
                                    email: data.data.email, 
                                    token: data.data.token}))

            }else{
                Swal.fire("Error", data.message, 'error');
            }
        }).catch((e)=> {
            Swal.fire("Error", "An error has ocurred", 'error');
        } )
    }
}