import React from 'react'

const PostText = ({text}) => {
  return (
    <div className='px-4'>
      <p className='mt-4 font-ubuntu text-sm lg:text-[15px] '>{text}</p>
    </div>
  )
}

export default PostText