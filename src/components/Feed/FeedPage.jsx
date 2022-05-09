import React from 'react'
import { useSelector } from 'react-redux'
import UserInitConfig from '../Authentication/UserInitConfig'
import MainNavBar from '../Navigation/MainNavBar'
import Post from '../Posts/Post'

const FeedPage = () => {

  const {firstTime} = useSelector(state => state.firstTime)

  return (
    <>
      {
        firstTime ? <UserInitConfig />
        :(
          <> 
            <MainNavBar />
            <main className='w-3/5 ml-10 flex flex-col items-center'>

              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />

            </main>
          </>
        )
      }
    </>
  )
}

export default FeedPage