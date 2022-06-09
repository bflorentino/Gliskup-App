import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {BrowserRouter as Router,  Navigate,  Route, Routes } from 'react-router-dom'
import { login } from '../actions/authActions'
import Loading from '../components/ui/Loading'
import AuthRouter from './AuthRouter'
import SocialRouter from './SocialRouter'

const AppRouter = () => {

    const {logged} = useSelector(state => state.authReducer)
    const dispatch = useDispatch();
    const [ isAuthChecked, setAuthChecked] = useState(false);

    useEffect(() => {
        const activeUser = JSON.parse(window.localStorage.getItem("ActiveUser"))
        if(activeUser){
            dispatch(login(activeUser));
        }
        setAuthChecked(true);  
    }, [logged, dispatch])

    return (
    <Router>
        <div>
            {
              isAuthChecked 
                ? 
                (<Routes>
                    <Route
                        path="/auth/*"
                        element={ !logged ? <AuthRouter /> : <Navigate to='/gliskup/feed' /> }
                    />
                    <Route
                        path="/gliskup/*"
                        element={ logged ? <SocialRouter /> : <Navigate to='/auth/login' />}
                    />
                </Routes>
                )
                : (<Loading />)
            }
        </div>
    </Router>
  )
}

export default AppRouter