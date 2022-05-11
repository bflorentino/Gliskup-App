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
      <article className='bg-white mobile:w-full mobile:my-1 lg:rounded-lg lg:w-3/5 h-[115px] flex'>
          <div className='flex mt-1'>
              <img src={profilePic} alt="" className='w-10 h-10 rounded-full ml-2 mt-2'/>
          </div>
          <div className='flex w-full flex-col justify-center'>
              <h1 className='font-bold font-ubuntu mt-2'>What are you thinking of?</h1>
              <button 
                className='border h-10 w-[93%] flex my-2 border-gray-text rounded-3xl pl-2 text-left text-gray font-bold'
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