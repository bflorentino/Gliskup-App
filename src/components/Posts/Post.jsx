import React from 'react'
import Interaction from './Interaction';
import PostImage from './PostImage';
import PostText from './PostText';
import Reactions from './Reactions';
import User from './User';

const Post = () => {
    
  return (
    <article className='bg-white mobile:w-full mobile:my-1 lg:rounded-lg lg:w-3/5'>
          <div className='flex justify-between'>
            <User />
            <span className='text-gray float-left text-sm mr-4 mt-2'>5 Nov</span>
          </div>
          <PostText text={"Netflix reportó una pérdida de 200,000 usuarios en su último trimestre, lo que ha encendido las alarmas en dicha empresa. Su valor en la bolsa se ha caído en un 30%."} />
          <PostImage />
          <Interaction />
    </article>
  )
}

export default Post