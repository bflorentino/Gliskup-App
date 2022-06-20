import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getUserPosts } from '../../actions/postActions'
import { setClosedStatsWindow } from '../../actions/PostStatisticsActions'
import { getProfileInfo } from '../../actions/usersActions'
import MainNavBar from '../Navigation/MainNavBar'
import PostStatisticsWindow from '../Posts/Post-Statitics-View/PostStatisticsWindow'
import Post from '../Posts/PostVisualization/Post'
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
    
    dispatch(setClosedStatsWindow())
    document.getElementById("portal").classList.remove("show-modal")
    document.getElementById("root").classList.remove("opacity")

  }, [userTo, dispatch, user])

  return (
    <>
    <div className='flex flex-col h-screen w-full'>
      <MainNavBar />
      <main className=' flex flex-col items-center w-full overflow-auto mt-[70px]'>
 
      <ProfileBanner userInfo={userData && userData} postsNumber={posts} />
      {
          !posts ? <Loading /> 
            :(posts.length > 0 
              ?posts.map((post, i) => 
              <Post post={post} key={i}  />
              )
              : <p className='text-white mt-4 font-thin font-inter'>This user has not posted aything yet</p>
            )}
        { 
          openW &&  <PostStatisticsWindow /> 
        }
      </main>
    </div>
    </>
  )
}

export default UserProfilePage