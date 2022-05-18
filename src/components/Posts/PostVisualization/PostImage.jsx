import React from 'react'

const PostImage = ({image}) => {
  return (
    <div className='py-4 flex justify-center'>
      <img src={image} alt="" className='' />
    </div>
  )
}

export default PostImage