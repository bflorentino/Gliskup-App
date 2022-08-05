import React from 'react'
import User from '../Posts/User'

const UserFollowGrid = ({user}) => {
  return (
    <div className='flex flex-row items-center justify-between bg-white h-[95px] mt-4 w-full'>

      <User user={user} sizePic={12}/>
      <button className='mr-4 text-xs lg:text-base  border px-2 text-white bg-auth-primary hover:bg-primary'>Follow</button>
    </div>
  )
}

export default UserFollowGrid