import React from 'react'
import { useSelector } from 'react-redux'

const User = () => {

    const {profilePic, user, name, lastName} = useSelector(state => state.authReducer);

    return (
          <div className='flex flex-row items-center mt-2'>
            <img src={profilePic ? profilePic : '../assets/no-user-image.jpg' } alt="" className='w-10 h-10 rounded-full ml-6' />
            <div className='flex flex-col'>
                <span className='font-bold font-ubuntu ml-2'>{name} {lastName} </span>
                <span className='font-ubuntu ml-2 text-gray text-sm'>@{user} </span>
            </div>
        </div>
  )
}

export default User