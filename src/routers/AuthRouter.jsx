import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from '../components/Authentication/LoginPage'
import SignUpPage from '../components/Authentication/SignUpPage'

const AuthRouter = () => {
  return (
    <div>
        <Routes>
            <Route
                exact
                path='/login'
                element={<LoginPage />}
            >
            </Route>

            <Route
                exact
                path='/signup'
                element={<SignUpPage />}
            >    
            </Route>
        </Routes>
    </div>
  )
}
export default AuthRouter