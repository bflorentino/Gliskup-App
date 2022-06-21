import React from 'react'
import Interaction from './Interaction';
import PostImage from './PostImage';
import PostText from './PostText';
import User from '../User';
import PostStatistics from './PostStatistics';
import { useDispatch } from 'react-redux';
import { removePost } from '../../../actions/postActions';
import Swal from 'sweetalert2';

const Post = ({post, isOnMyOwnProfile}) => {

  const dispatch = useDispatch()

  const handleRemovePost = (e) => {

    Swal.fire({
      title: "Remove Post",
      text: "Are you sure you want to remove this post?",
      icon: "warning",
      confirmButtonText: 'Ok',
      showCancelButton: true
    }).then(res => {
      if(res.isConfirmed)
        dispatch(removePost(post._id, post.image))
    })
  }

  return (  
    <article className='bg-white mobile:w-full mobile:my-1 lg:rounded-lg sd:w-8/12 lg:w-7/12 '>
          <div className='flex justify-between'>
            <User user = {post.fromUser} />
            <div className='flex flex-col items-center'>
              {
                isOnMyOwnProfile &&
                  <button 
                    className='rounded-full mt-2 hover:bg-gray-text p-2' 
                    onClick={handleRemovePost}
                  >
                    <img src="../../assets/trash2.png" alt="" className='w-6 h-6' />
                </button>
              }
             <span className='text-gray float-left text-sm mr-4 mt-2'>{post.relativeTime}</span>
            </div>
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