import React from 'react'
import { useSelector } from 'react-redux'

const ProfileBanner = ({userInfo, postsNumber}) => {

  const userOnline = useSelector(state => state.authReducer);

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
              <p className=' text-sm lg:text-base pr-4'><strong>100</strong> followers</p>
              <p className='text-sm lg:text-base pr-4'><strong>{ postsNumber ? postsNumber.length : 0}</strong> posts</p>
              <p className='text-sm lg:text-base' > <strong> 100 </strong> followed </p>
            </div>
          
            <div className='mt-2'> <p className=' text-sm'>{userInfo.presentation}</p></div>
          </div>
       </div>
          
          <div className='h-full lg:ml-8 mr-2'>
              {
                userOnline.user === userInfo.user 
                ? <button className='text-xs lg:text-base border px-2 text-white bg-auth-primary hover:bg-primary mt-8'> Edit Profile </button>
                : <button className=' text-xs lg:text-base  border px-2 text-white bg-auth-primary hover:bg-primary mt-8' > Follow </button>
              }
          </div>
      </> 
    )
  }
  </div>
  )  
}

export default ProfileBanner