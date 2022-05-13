import React from 'react'
import Interaction from './Interaction';
import PostImage from './PostImage';
import PostText from './PostText';
import User from './User';

const Post = ({post}) => {
    
  return (
    <article className='bg-white mobile:w-full mobile:my-1 lg:rounded-lg lg:w-3/5'>
          <div className='flex justify-between'>
            <User user = {post.fromUser} />
            <span className='text-gray float-left text-sm mr-4 mt-2'>{post.relativeTime}</span>
          </div>
          <PostText text={post.text} />
          {
            post.image &&  <PostImage image={post.image}/>
          }
          <Interaction />
    </article>
  )
}

export default Post