import React from 'react'
import { useSelector } from 'react-redux'
import { updateProfileFollow } from '../../actions/followingActions';
import { useFetch } from '../../hooks/useFetch';
import BaseURL from '../../services/url';
import { useDispatch } from 'react-redux'

const ProfileBanner = ({userInfo, postsNumber}) => {

  const userOnline = useSelector(state => state.authReducer);
  const { handleFetchValues } = useFetch({})
  const dispatch = useDispatch()

  const handleFollow = (act) => {

    const url = act
      ? `${BaseURL}/follow/${userOnline.user}/${userInfo.user}`
      : `${BaseURL}/follow/unfollow/${userOnline.user}/${userInfo.user}`
    
      handleFetchValues( url, 'POST',{'Content-Type': 'application/json'})
      dispatch(updateProfileFollow(act))
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
              <p className=' text-sm lg:text-base pr-4'><strong>{userInfo.followers}</strong> followers</p>
              <p className='text-sm lg:text-base pr-4'><strong>{ postsNumber ? postsNumber.length : 0}</strong> posts</p>
              <p className='text-sm lg:text-base' > <strong> {userInfo.followed} </strong> followed </p>
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
                    <button className='text-xs lg:text-base border px-2 text-white bg-auth-primary hover:bg-primary mt-8'  onClick={() => handleFollow(false)}  > Following </button>
                  :
                    <button className='text-xs lg:text-base  border px-2 text-white bg-auth-primary hover:bg-primary mt-8' onClick={() => handleFollow(true)} > Follow </button>
              }
          </div>
      </> 
    )
  }
  </div>
  )  
}

export default ProfileBanner;