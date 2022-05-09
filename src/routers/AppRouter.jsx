import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {BrowserRouter as Router,  Navigate,  Route, Routes } from 'react-router-dom'
import { login } from '../actions/authActions'
import AuthRouter from './AuthRouter'
import SocialRouter from './SocialRouter'

const AppRouter = () => {

    const {logged} = useSelector(state => state.authReducer)
    const dispatch = useDispatch();

    useEffect(() => {
        const activeUser = JSON.parse(window.localStorage.getItem("ActiveUser"))
        if(activeUser){
            dispatch(login(activeUser))
        }
    }, [logged, dispatch])

    return (
    <Router>
        <div>
            <Routes>
                <Route
                    exact
                    path="*"
                    element={ logged ? <SocialRouter /> : <Navigate to='/auth/login' />}
                >
                </Route>
                <Route
                    exact
                    path='/auth/*'
                    element={ !logged ? <AuthRouter /> : <Navigate to='/feed' /> }
                >
                </Route>
            </Routes>
        </div>
    </Router>
  )
}

export default AppRouter