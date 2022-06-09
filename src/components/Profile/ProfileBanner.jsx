import React from 'react'
import { useSelector } from 'react-redux'

const ProfileBanner = ({userInfo, postsNumber}) => {

  const userOnline = useSelector(state => state.authReducer);

  return (
    <div className='flex w-3/5 border-b border-border-line py-4'>
    {
      userInfo && (  
       <>
        <img src={`${userInfo?.profilePic && userInfo.profilePic}`} 
            alt=""
            className='w-32 h-32 rounded-full' 
        />
        
        <div className='flex flex-col mt-4 ml-4'>
          
          <p className='text-xl text-gray-text'>{userInfo?.name} {userInfo?.lastName}</p>
          <p className='text-gray-text'>@{userInfo?.user}</p>

          <div className='flex text-white mt-2'>
            <p className='pr-4'><strong>100</strong> followers</p>
            <p className='pr-4'><strong>{ postsNumber ? postsNumber.length : 0}</strong> posts</p>
            <p> <strong> 100 </strong> followed </p>
          </div>
        
          <div className='mt-2'> <p className='text-white text-sm'>{userInfo.presentation}</p></div>
        </div>
        
        <div className='mt-8'>
            {
              userOnline.user === userInfo.user 
              ? <button className='border px-2 text-white bg-auth-primary hover:bg-primary'> Edit Profile </button>
              : <button className='border px-2 text-white bg-auth-primary hover:bg-primary' > Follow </button>
            }
        </div>
      </> 
    )
  }
  </div>
  )  
}

export default ProfileBanner