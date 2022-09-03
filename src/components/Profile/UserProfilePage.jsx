import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import { clearPosts, setPosts } from '../../actions/postActions'
import { setClosedStatsWindow } from '../../actions/PostStatisticsActions'
import { removeUsersToSearch } from '../../actions/searchUserActions'
import { removeProfileData, setProfileData } from '../../actions/usersActions'
import FollowUsersWindow from '../FollowingUsers/FollowUsersWindow'
import MainNavBar from '../Navigation/MainNavBar'
import PostStatisticsWindow from '../Posts/Post-Statitics-View/PostStatisticsWindow'
import Post from '../Posts/PostVisualization/Post'
import Loading from '../ui/Loading'
import ProfileBanner from './ProfileBanner'
import baseURL from '../../services/url'

const UserProfilePage = () => {

  const posts = useSelector(state => state.posts);
  const {openW} = useSelector(state => state.postStatsWindow);
  const [ isFollowersOpen, setFollowersOpen] = useState({open: false, toShow: null})
  const dispatch = useDispatch();
  const {userRequestTo} = useParams()
  const userOnline = useSelector(state => state.authReducer);
  const userData = useSelector(state => state.usersReducer);
  const [ handlePostsFetchValues, resultPostsFetch ] = useFetch({})
  const [ handleProfileFetchValues, resultProfileFetch ] = useFetch({})

  // Effect to set fetch and cleanup funct
  useEffect(()=> {

    handlePostsFetchValues(`${baseURL}/post/viewProfile/${userOnline.user}/${userRequestTo}`, 'GET')
    handleProfileFetchValues(`${baseURL}/user/profileData/${userRequestTo}/${userOnline.user}`, 'GET')  
  
    dispatch(setClosedStatsWindow())
    setFollowersOpen({open: false, toShow:null})

    document.getElementById("portal").classList.remove("show-modal")
    document.getElementById("root").classList.remove("opacity")

    return ()=> {
      dispatch(clearPosts())
      dispatch(removeProfileData())
      dispatch(removeUsersToSearch())
    }

  }, [userRequestTo, dispatch, userOnline.user, handlePostsFetchValues, handleProfileFetchValues])

  // Effect when posts have been fetched
  useEffect(() => {

    if(!resultPostsFetch) return

    if(resultPostsFetch.success) {
      dispatch(setPosts(resultPostsFetch.data))
    }

  }, [resultPostsFetch, dispatch])

  // Effect when profile data has been fetched
  useEffect(() => {

    if(!resultProfileFetch) return

    if(resultProfileFetch.success) {
      dispatch(setProfileData(resultProfileFetch.data))
    }

  }, [resultProfileFetch, dispatch])

  return (
    <>
    <div className='flex flex-col h-screen w-full'>
      <MainNavBar />
      <main className='flex flex-col items-center w-full overflow-auto mt-[70px]'>
 
      <ProfileBanner 
        userInfo={userData && userData} 
        postsNumber={posts?.length} 
        setFollowersOpen={setFollowersOpen} 
      />
      {
          !posts 
            ? <Loading /> 
            :(
              posts.length > 0 
                ? posts.map((post, i) => 
                  <Post post={post} isOnMyOwnProfile={userRequestTo===userOnline.user} key={i}  />
              )
                : <p className='text-white mt-4 font-thin font-inter'>This user has not posted aything yet</p>
            )}
        { 
          openW &&  <PostStatisticsWindow /> 
        }
        {
          isFollowersOpen.open && (
            <FollowUsersWindow 
              toShow={isFollowersOpen.toShow} 
              userTo={userData?.user}
              setFollowersOpen={setFollowersOpen} 
            />
          )
        }
      </main>
    </div>
    </>
  )
}

export default UserProfilePage