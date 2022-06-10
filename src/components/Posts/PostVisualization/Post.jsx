import React from 'react'
import Interaction from './Interaction';
import PostImage from './PostImage';
import PostText from './PostText';
import User from '../User';
import PostStatistics from './PostStatistics';

const Post = ({post}) => {
  
  return (  
    <article className='bg-white mobile:w-full mobile:my-1 lg:rounded-lg sd:w-8/12 '>
          <div className='flex justify-between'>
            <User user = {post.fromUser} />
            <span className='text-gray float-left text-sm mr-4 mt-2'>{post.relativeTime}</span>
          </div>
          <PostText text={post.text} />

          {
            post.image &&  <PostImage image={post.image}/>
          }
  
          <div className='px-4 mb-2 flex justify-between'>
            <PostStatistics reactions={post.reactions}  />
          </div>
         
          <Interaction postId = {post._id} reacted = {post.reacted} ownReactionType={post.ownReactionType} />
    </article>
  )
}

export default Post