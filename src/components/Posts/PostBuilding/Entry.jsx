import React from 'react'
import { useDispatch } from 'react-redux'
import { setClosedPostEntry } from '../../../actions/postEntryActions'
import PostImage from '../PostImage'
import User from '../User'

const Entry = ({setIsOpen}) => {

  const dispatch = useDispatch();

  const handleClosePostEntry = (e) => {
    dispatch(setClosedPostEntry())
  }

  return (
    <div className='flex flex-col bg-white mobile:w-full mobile:my-1 lg:rounded-lg lg:w-3/5'>
       <div className=' w-full  flex justify-between border-b border-gray py-3'>
         <h1 className='text-xl ml-4'>Make a post</h1>
         <span> 
          <button onClick={handleClosePostEntry} className='text-2xl mr-1 font-ubuntu hover:rounded-full hover:bg-border-line hover:text-gray font-bold text-gray px-4 py-1' >X</button>
        </span>
       </div>
       <div className='overflow-auto'>
          <User />
          <form action="" className='flex px-6 mt-2'>
            <textarea 
              name="" 
              className='outline-none w-full resize-none overflow-hidden' 
              placeholder="Tell us..."
              rows={5}
            />
          </form>
        </div>
        <div className='px-6 flex justify-between mb-2'>
          <label className='cursor-pointer'>
            <input 
                type="file"
                name='profPicture'
                accept='image/*'
                className= 'w-4/5 mt-4 none hidden '
            />
             <img src="./assets/image_gallery.png" alt="" className='w-10' />
          </label>
          <button className='text-base text-gray-text font-bold px-4 outline-none rounded bg-auth-primary'>Post</button>
        </div>
    </div>
  )
}

export default Entry