import React from 'react'
import PropTypes from 'prop-types'

const PostText = ({text}) => {
  return (
    <div className='px-4'>
      <p className='p-3 font-ubuntu text-sm lg:text-[15px]'>{text}</p>
    </div>
  )
}

export default PostText

PostText.propTypes = {
  text: PropTypes.string.isRequired
}