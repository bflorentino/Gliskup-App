import React from 'react'
import PropTypes from 'prop-types'

const PostImage = ({image}) => {
  return (
    <div className='py-4 flex justify-center'>
      <img src={image} alt="" className='' />
    </div>
  )
}

export default PostImage

PostImage.propTypes = {image: PropTypes.string.isRequired}