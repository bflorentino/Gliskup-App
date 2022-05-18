import React from 'react'
import { useSelector } from 'react-redux'
import User from '../User';

const UserReactionGrid = () => {

  const user = useSelector(state => state.authReducer);

  return (
    <>
      <div className='flex flex-row justify-between items-center mt-3'>
        <User user={user} sizePic={'12'} />
        <img src="./assets/like-reaction.png" alt="like" className='w-9 h-9 mr-4' />
      </div>
      <div className='border-b border-border-line mt-2 m-auto w-[85%]'></div>
    </>
  )
}

export default UserReactionGrid