import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FeedPage from '../components/Feed/FeedPage'
import UserProfilePage from '../components/Profile/UserProfilePage'

const SocialRouter = () => {

  return (
    <>
    <div className='lg:flex'>

          <Routes>
              <Route
                  exact path='/userProfile/:userTo'
                  element={<UserProfilePage />}
              >
              </Route>
              <Route
                  exact path='/feed'
                  element={<FeedPage />}
              >
              </Route>
          </Routes>

    </div>
    </>
  )
}

export default SocialRouter