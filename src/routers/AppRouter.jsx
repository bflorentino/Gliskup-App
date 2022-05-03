import React from 'react'
import {BrowserRouter as Router,  Route, Routes } from 'react-router-dom'
import AuthRouter from './AuthRouter'
import SocialRouter from './SocialRouter'

const AppRouter = () => {
  return (
    <Router>
        <div>
            <Routes>
                <Route
                    exact
                    path="*"
                    element={<SocialRouter/>}
                >
                </Route>
                <Route
                    exact
                    path='/auth/*'
                    element={<AuthRouter/>}
                >
                </Route>
            </Routes>
        </div>
    </Router>
  )
}

export default AppRouter