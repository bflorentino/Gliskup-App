import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setClosedPostEntry } from '../../../actions/postEntryActions'
import { uploadPost } from '../../../actions/postActions'
import { useForm } from '../../../hooks/useForm'
import PostImage from '../PostVisualization/PostImage'
import User from '../User'
import { setLoading } from '../../../actions/InterfaceActions'

const Entry = () => {

  const dispatch = useDispatch();
  const [ image, setImage ] = useState(null) 
  const [ readedImage, setReadedImage ] = useState(null)
  const user = useSelector(state => state.authReducer)
  const {loading} = useSelector(state => state.interfaceReducer)

  const [ formValues, handleInputChanges ]  = useForm({
    text: ""
  })

  const {text} = formValues;

  const imageHandler = (e) =>{
    const reader = new FileReader();
    reader.onload = () => {
      reader.readyState === 2 && setImage(reader.result)
    }
    reader.readAsDataURL(e.target.files[0]);
    setReadedImage(e.target.files[0])
  }

  const handleClosePostEntry = (e) => {
    dispatch(setClosedPostEntry())
  }

  const handleUploadPost = (e) => {
    dispatch(setLoading())
    dispatch(uploadPost({
      text,
      image: readedImage,
      user: user.user
    }))
  }

  return (
    <div className='flex flex-col bg-white mobile:w-full mobile:my-1 lg:rounded-lg lg:w-3/5'>
       <div className=' w-full  flex justify-between border-b border-gray py-3 items-center'>
         <h1 className='text-2xl ml-4 font-inter'>Make a post</h1>
         <span> 
          <button onClick={handleClosePostEntry} className='text-2xl mr-1 hover:rounded-full hover:bg-border-line hover:text-gray font-inter font-bold text-gray px-4 py-1' >X</button>
        </span>
       </div>
       <div className='overflow-auto h-[220px]'>
          <User user={user}/>
          <form action="" className='flex px-4 mt-2'>
            <textarea 
              name="text"
              value={formValues.text}
              onChange={handleInputChanges} 
              className='outline-none w-full resize-none overflow-auto border border-border-line px-2 rounded' 
              placeholder="Tell us..."
              rows={6}
            />
          </form>

          {image &&
            <div className='flex justify-center flex-col p-2'>
              <PostImage image={image} />
            </div>
          }

        </div>
        <div className='px-6 flex justify-between mb-2 mt-1'>
         
         {
           !image ? (
            <label className='cursor-pointer'>
            <input 
                type="file"
                name='profPicture'
                accept='image/*'
                className= 'w-4/5 mt-4 none hidden '
                onChange={imageHandler}
            />
            <div className='flex items-center'>
              <img src="./assets/image_gallery.png" alt="" className='w-8' />
              <p className='text-xs font-inter ml-2'>Upload Picture</p>
            </div>
          </label>
           )
           :
          <button className='flex items-center' onClick={() => setImage(null)}>  
                <img src='./assets/Remove.png' alt='Remove' className='w-8 rounded-full' />
              <p className='text-xs font-inter ml-2'>Remove Picture</p>
          </button>
         }

          <button 
            className='text-sm text-gray-text font-bold px-4 outline-none rounded bg-auth-primary font-inter' onClick={handleUploadPost}
            disabled={text === "" || loading}
          >
              Post
          </button>
        </div>
    </div>
  )
}

export default Entry