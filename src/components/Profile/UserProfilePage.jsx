import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getUserPosts } from '../../actions/postActions'
import { setClosedStatsWindow } from '../../actions/PostStatisticsActions'
import { getProfileInfo } from '../../actions/usersActions'
import FollowUsersWindow from '../FollowingUsers/FollowUsersWindow'
import MainNavBar from '../Navigation/MainNavBar'
import PostStatisticsWindow from '../Posts/Post-Statitics-View/PostStatisticsWindow'
import Post from '../Posts/PostVisualization/Post'
import Loading from '../ui/Loading'
import ProfileBanner from './ProfileBanner'

const UserProfilePage = () => {

  const posts = useSelector(state => state.posts);
  const {openW} = useSelector(state => state.postStatsWindow);
  const [ isFollowersOpen, setFollowersOpen] = useState({open: false, toShow: null})
  const dispatch = useDispatch();
  const {userRequest} = useParams()
  const {user} = useSelector(state => state.authReducer);
  const userData = useSelector(state => state.usersReducer);

  useEffect(()=> {
    
    dispatch(getUserPosts(user, userRequest))
    dispatch(getProfileInfo(userRequest, user))
    dispatch(setClosedStatsWindow())

    document.getElementById("portal").classList.remove("show-modal")
    document.getElementById("root").classList.remove("opacity")

  }, [userRequest, dispatch, user])

  return (
    <>
    <div className='flex flex-col h-screen w-full'>
      <MainNavBar />
      <main className='flex flex-col items-center w-full overflow-auto mt-[70px]'>
 
      <ProfileBanner 
        userInfo={userData && userData} 
        postsNumber={posts} 
        setFollowersOpen={setFollowersOpen} 
      />
      {
          !posts ? <Loading /> 
            :(posts.length > 0 
              ?posts.map((post, i) => 
              <Post post={post} isOnMyOwnProfile={userRequest===user} key={i}  />
              )
              : <p className='text-white mt-4 font-thin font-inter'>This user has not posted aything yet</p>
            )}
        { 
          openW &&  <PostStatisticsWindow /> 
        }
        {
          isFollowersOpen.open && <FollowUsersWindow toShow={isFollowersOpen.toShow} userTo={userData.user} />
        }
      </main>
    </div>
    </>
  )
}

export default UserProfilePage