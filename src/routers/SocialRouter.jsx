import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FeedPage from '../components/Feed/FeedPage'

const SocialRouter = () => {
  return (
    <>
    <div className='flex'>

          <Routes>
              <Route
                  exact
                  path='/feed'
                  element={<FeedPage />}
              >
              </Route>
          </Routes>
    </div>
    </>
  )
}

export default SocialRouter