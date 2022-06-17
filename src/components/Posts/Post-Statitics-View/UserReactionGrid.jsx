import React from 'react'
import { useSelector } from 'react-redux'
import User from '../User';

const UserReactionGrid = ( {reaction} ) => {

  const user = useSelector(state => state.authReducer);

  const imgReactionsNames = ['like-reaction', 
    'love-reaction', 
    'funny-reaction',
    'sad-reaction', 
    'surprise-reaction',
    'angry-reaction',
    'curious-reaction'
  ]

  return (
    <>
      <div className='flex flex-row justify-between items-center mt-3'>
        <User user={reaction.user || user}  /> 
        <img src={`../../assets/${imgReactionsNames[reaction.reactionType - 1]}.png`} alt="" className='w-9 h-9 mr-4' />
      </div>
      <div className='border-b border-border-line mt-2 m-auto w-[85%]'></div>
    </>
  )
}

export default UserReactionGrid