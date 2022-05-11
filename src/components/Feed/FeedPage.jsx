import React from 'react'
import { useSelector } from 'react-redux'
import UserInitConfig from '../Authentication/UserInitConfig'
import MainNavBar from '../Navigation/MainNavBar'
import Post from '../Posts/Post'
import Entry from '../Posts/PostBuilding/Entry'
import PostCreate from '../Posts/PostBuilding/PostCreate'
import Search from '../Search/Search'

const FeedPage = () => {

  const {firstTime} = useSelector(state => state.firstTime)
  const {postBuilderOpened} = useSelector(state => state.postEntry)

  return (
    <>
      {
        firstTime ? <UserInitConfig />
        :(
          <> 
            <MainNavBar />
            <main className=' lg:ml-10 flex flex-col items-center w-full h-screen overflow-auto'>
              <Search />
              {
                !postBuilderOpened ? <PostCreate />   :  <Entry />
              }
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