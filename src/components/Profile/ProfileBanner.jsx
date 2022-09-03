import React, { useEffect } from 'react'
import ProptTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { updateProfileFollow } from '../../actions/followingActions';
import { useFetch } from '../../hooks/useFetch';
import BaseURL from '../../services/url';
import { useDispatch } from 'react-redux'
import { useNotification } from '../../hooks/useNotification';

const ProfileBanner = ({userInfo, postsNumber, setFollowersOpen}) => {

  const userOnline = useSelector(state => state.authReducer);
  const [ handleFetchValues, resultFetch, resetFetchValues ] = useFetch({})
  const dispatch = useDispatch()  
  const {showNotification, handleNotificationParams, notificationParams} = useNotification({})

  useEffect(() => {

    if(resultFetch === null) return

    if(!resultFetch.success){
        handleNotificationParams(`An error ocurred in following ${userInfo?.user}`, 'error')
        return
    }

    resultFetch.message === "Started Following" 
      ? handleNotificationParams(`You started following ${userInfo?.user}`, "success")
      : handleNotificationParams(`You stoped following ${userInfo?.user}`, "warning")

    resetFetchValues()
  }, [resultFetch, handleNotificationParams, userInfo?.user, resetFetchValues])

  useEffect(()=> {
    showNotification()
  }, [notificationParams, showNotification])

  const handleFollow = (act) => {

    const url = act 
      ? `${BaseURL}/follow/${userOnline.user}/${userInfo.user}`
      : `${BaseURL}/follow/unfollow/${userOnline.user}/${userInfo.user}`

      handleFetchValues( url, 'POST',{'Content-Type': 'application/json'})
      dispatch(updateProfileFollow(act))
  }

  const handleGetUsersFollow = (followKind) => {
    document.getElementById("portal").classList.toggle('opacity')
    document.getElementById("portal").classList.toggle("show-modal");
    setFollowersOpen({open: true, toShow: followKind})
  }

  return (
    <div className='flex mobile:w-full lg:rounded-lg sd:w-8/12 lg:w-7/12  py-4 bg-white rounded items-center justify-between'>
    {
      userInfo && (  
       <>
       <div className='flex'>
        <img src={userInfo.profilePic || '../../assets/no-user-image.jpg'} 
            alt=""
            className='w-20 h-20 lg:w-32 lg:h-32 rounded-full' 
        />
          <div className='flex flex-col mt-4 ml-4 font-ubuntu'>
            
            <p className='text-xl font-bold'>{userInfo?.name} {userInfo?.lastName}</p>
            <p className='text-gray'>@{userInfo?.user}</p>

            <div className='flex  mt-2'>
              
              <p 
                className=' text-sm lg:text-base pr-4 cursor-pointer hover:underline'
                onClick={()=>handleGetUsersFollow("followers")} 
              >
                  <strong>{userInfo.followers}</strong> followers
              </p>
              
              <p className='text-sm lg:text-base pr-4'><strong>{ postsNumber ? postsNumber : 0}</strong> posts</p>
              
              <p 
                className='text-sm lg:text-base cursor-pointer hover:underline' 
                onClick={()=>handleGetUsersFollow("followed")} 
              > 
                <strong> {userInfo.followed} </strong> followed 
              </p>
            </div>
          
            <div className='mt-2'> <p className=' text-sm'>{userInfo.presentation}</p></div>
          </div>
       </div>
          
          <div className='h-full lg:ml-8 mr-2'>
              {
                userOnline.user === userInfo.user 
                ? 
                  <button className='text-xs lg:text-base border px-2 text-white bg-auth-primary hover:bg-primary mt-8'> Edit Profile </button>
                : 
                  userInfo.followedByUserOnline
                  ? 
                    <button 
                      className='text-xs lg:text-base border px-2 text-white bg-auth-primary hover:bg-primary mt-8'  
                      onClick={() => handleFollow(false)}  
                    > 
                      Following 
                    </button>
                  :
                    <button 
                      className='text-xs lg:text-base  border px-2 text-white bg-auth-primary hover:bg-primary mt-8' 
                      onClick={() => handleFollow(true)}
                    > 
                      Follow 
                  </button>
              }
          </div>
      </> 
    )
  }
  </div>
  )  
}

export default ProfileBanner;

ProfileBanner.propTypes = {
  userInfo : ProptTypes.object,
  postsNumber: ProptTypes.number,
  setFollowersOpen: ProptTypes.func.isRequired
}