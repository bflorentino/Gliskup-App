import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  getPosts } from '../../actions/postActions'
import UserInitConfig from '../Authentication/UserInitConfig'
import MainNavBar from '../Navigation/MainNavBar'
import Post from '../Posts/PostVisualization/Post'
import Entry from '../Posts/PostBuilding/Entry'
import PostCreate from '../Posts/PostBuilding/PostCreate'
import Loading from '../ui/Loading'
import PostStatisticsWindow from '../Posts/Post-Statitics-View/PostStatisticsWindow'

const FeedPage = () => {

  const {firstTime} = useSelector(state => state.firstTime)
  const {postBuilderOpened} = useSelector(state => state.postEntry)
  const posts = useSelector(state => state.posts)
  const dispatch = useDispatch();
  const {openW } = useSelector(state => state.postStatsWindow)
  const { user } = useSelector(state => state.authReducer)

  useEffect(() => {
    dispatch(getPosts(user))
  }, [dispatch, user])

  return (
    <>
      {
        firstTime ? <UserInitConfig />
        :(
          <>
            <div className='flex flex-col h-screen w-full'>
              <MainNavBar />
              <main className='flex flex-col items-center w-full overflow-auto mt-[70px]'>
                {
                  !postBuilderOpened ? <PostCreate />   :  <Entry />
                }

                {
                  !posts ? <Loading /> 
                          : posts.map((post, i) => 
                          <Post post={post} key={i}  />
                )
              }

            { 
              openW &&  <PostStatisticsWindow /> 
            }
                </main>

            </div>
          </>
        )
      }
    </>
  )
}
export default FeedPage