import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getUserPosts } from '../../actions/postActions'
import { getProfileInfo } from '../../actions/usersActions'
import MainNavBar from '../Navigation/MainNavBar'
import PostStatisticsWindow from '../Posts/Post-Statitics-View/PostStatisticsWindow'
import Post from '../Posts/PostVisualization/Post'
import Search from '../Search/Search'
import Loading from '../ui/Loading'
import ProfileBanner from './ProfileBanner'

const UserProfilePage = () => {

  const posts = useSelector(state => state.posts);
  const {openW} = useSelector(state => state.postStatsWindow);
  const dispatch = useDispatch();
  const {userTo} = useParams()
  const {user} = useSelector(state => state.authReducer);
  const userData = useSelector(state => state.usersReducer);

  useEffect(()=> {
    dispatch(getUserPosts(user, userTo))
    dispatch(getProfileInfo(userTo))
  }, [userTo, dispatch, user])

  return (
    <>
      <MainNavBar />
      <main className=' lg:ml-10 flex flex-col items-center w-full h-screen overflow-auto'>
      <Search />

      <ProfileBanner userInfo={userData && userData} postsNumber={posts} />
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
    </>
  )
}

export default UserProfilePage