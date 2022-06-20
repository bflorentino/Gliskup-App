import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setOpenPostEntry } from '../../../actions/postEntryActions';

const PostCreate = () => {
    
  const {profilePic} = useSelector(state => state.authReducer)
  const dispatch = useDispatch()

  const handlePostEntry = (e) => {
    dispatch(setOpenPostEntry())
  }

  return (
    <>
      <article className='bg-white mobile:w-full mobile:my-1 lg:rounded-lg sd:w-8/12 lg:w-7/12 2 h-[115px] flex'>
          <div className='flex mt-1'>
              <img 
                src={profilePic || '../../assets/no-user-image.jpg'} 
                alt="Me" 
                className='w-10 h-10 rounded-full ml-4 mt-2'
              />
          </div>
          <div className='flex w-full flex-col justify-center'>
              <h1 className='font-bold font-ubuntu mt-2 ml-2'>What are you thinking of?</h1>
              <button 
                className='border h-10 w-[93%] flex my-2 border-gray-text rounded-3xl pl-2 text-left text-gray hover:bg-gray-text font-bold'
                onClick={handlePostEntry}
                >
                  Make a Post
              </button>
          </div>
      </article>
    </>
  )
}

export default PostCreate