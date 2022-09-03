import React from 'react'
import ProptTypes from 'prop-types'
import UserReactionGrid from './UserReactionGrid'

const ReactionList = ({reactions}) => {
  
  return (
    <>
      {
        reactions.length > 0
        ? reactions.map((reaction, i) => (
          <UserReactionGrid key={i} reaction={reaction} />
        ))
        :<div className='w-full h-full flex items-center justify-center'>
          <p className='text-gray  font-inter'>No reactions of this type</p>
        </div>
      }
    </>
  )
}

export default ReactionList

ReactionList.propTypes = {
  reactions: ProptTypes.array.isRequired
}