import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  clearPosts, setPosts } from '../../actions/postActions'
import UserInitConfig from '../Authentication/UserInitConfig'
import MainNavBar from '../Navigation/MainNavBar'
import Post from '../Posts/PostVisualization/Post'
import Entry from '../Posts/PostBuilding/Entry'
import PostCreate from '../Posts/PostBuilding/PostCreate'
import Loading from '../ui/Loading'
import PostStatisticsWindow from '../Posts/Post-Statitics-View/PostStatisticsWindow'
import Sidebar from '../Navigation/Sidebar'
import { removeUsersToSearch } from '../../actions/searchUserActions'
import { useFetch } from '../../hooks/useFetch'
import baseURL from '../../services/url'

const FeedPage = () => {

  const {firstTime} = useSelector(state => state.firstTime)
  const {postBuilderOpened} = useSelector(state => state.postEntry)
  const posts = useSelector(state => state.posts)
  const dispatch = useDispatch();
  const {openW } = useSelector(state => state.postStatsWindow)
  const { user } = useSelector(state => state.authReducer)
  const [ handleFetchValues, resultFetch ] = useFetch({})

  useEffect(() => {

    let userRequest = user
    handleFetchValues(`${baseURL}/post/view/${userRequest}`, 'GET' )

    return () => {
      dispatch(clearPosts())
      dispatch(removeUsersToSearch())
    }
  }, [dispatch, user, handleFetchValues])

  useEffect(()=> {
    if(!resultFetch) return

    if(resultFetch.success) {
      dispatch(setPosts(resultFetch.data))
    }

  }, [resultFetch, dispatch])

  return (
    <>
      {
        firstTime ? <UserInitConfig />
        :(
          <>
            <div className='flex flex-col h-screen w-full'>
              <MainNavBar />
              <div className='flex overflow-auto'>
                <Sidebar />
                <main className='flex flex-col items-center w-full xl:w-[80%] overflow-auto mt-[70px]'>
                  {
                    !postBuilderOpened ? <PostCreate />   :  <Entry />
                  }

                  {
                    posts
                    ?  
                     posts.map((post, i) => 
                      <Post post={post} isOnMyOwnProfile={false} key={i}  />
                    )
                    : <Loading />
                  }
                  
              { 
                openW &&  <PostStatisticsWindow /> 
              }
              </main>
            </div>
          </div>
        </>
        )
      }
    </>
  )
}
export default FeedPage