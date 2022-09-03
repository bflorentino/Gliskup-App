import React from 'react'
import { useSelector } from 'react-redux'
import ProptTypes from 'prop-types'
import User from '../User';
import { interactions } from '../PostVisualization/interactions';

const UserReactionGrid = ( {reaction} ) => {

  const user = useSelector(state => state.authReducer);

  return (
    <>
      <div className='flex flex-row justify-between items-center mt-3'>
        <User user={reaction.user || user}  /> 
        <img src={interactions[reaction.reactionType - 1].src} alt="" className='w-9 h-9 mr-4' />
      </div>
      <div className='border-b border-border-line mt-2 m-auto w-[85%]'></div>
    </>
  )
}

export default UserReactionGrid

UserReactionGrid.propTypes = {
  reaction: ProptTypes.object.isRequired
}