import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initConfigurationPassed, setProfilePicture } from '../../actions/FirstTimeInAppActions'
import { removeLoading, setLoading } from '../../actions/InterfaceActions'
import { useForm } from '../../hooks/useForm'

const UserInitConfig = () => {

  const [ image, setImage ] = useState(null) 
  const [ readedImage, setReadedImage ] = useState(null)
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.authReducer)
  const { loading } = useSelector(state => state.interfaceReducer)
  const [formValues, handleInputChanges] = useForm({presentation: ""});

  const imageHandler = (e) =>{
    const reader = new FileReader();
    reader.onload = () => {
      reader.readyState === 2 && setImage(reader.result)
    }
    reader.readAsDataURL(e.target.files[0]);
    setReadedImage(e.target.files[0])
  }

  const handleGenerateAvatar = (e) => {

    e.preventDefault()
    dispatch(setLoading())
    const avatarsServers = ['male', 'female', 'human', 'avataaars', 'bottts', 'micah', 'identicon', 'jdenticon']
    const pickedServer = avatarsServers[Math.floor(Math.random() * (avatarsServers.length - 0) + 0)]
    const img = `https://avatars.dicebear.com/api/${pickedServer}/${Math.random()}.svg`
    dispatch(removeLoading())
    setImage(img)
    setReadedImage(null)
  }

  const handleSavePic = (e) => {
    e.preventDefault();
    dispatch(setLoading())
    
    dispatch(setProfilePicture({user, 
                                profilePic: image, 
                                readedImage, 
                                presentation : formValues.presentation}))    
  }

  const handleSkip = (e) => {
    e.preventDefault()
    dispatch(initConfigurationPassed()) 
  }

  return (
    <>
          <div className='w-full flex flex-row justify-center items-center h-screen'>
            <form className='bg-white w-4/5 lg:w-2/5 rounded-xl h-[450px]  lg:h-[550px] shadow-2xl' encType='multipart/form-data'>

              <h1 className='text-center text-2xl font-bold'>Your profile picture</h1>
              
              <div className='w-full h-full flex items-center justify-center flex-col'>
              
               <img 
                  src= { image ? image:  '../assets/no-user-image.jpg'}  
                  alt='no pic' 
                  className=' h-2/5 lg:h-1/2  rounded-full border ' />
              
               <label className='cursor-pointer mt-4 bg-auth-submit hover:bg-link py-1 px-3 text-white'>
                    <input 
                      type="file"
                      name='profPicture'
                      accept='image/*'
                      className= 'w-4/5 mt-4 none hidden '
                      onChange={imageHandler}
                      />
                        Upload a picture
                </label>
                <button 
                  className='bg-secundary mt-2 py-1 px-4 text-white hover:bg-[#E9B930]' 
                  onClick={handleGenerateAvatar}
                  disabled = {loading} 
                >   
                  Ramdon Avatar 
                </button>

                <textarea
                    type="text" 
                    name='presentation' 
                    autoComplete='off'
                    placeholder='Your Presentation'
                    className='border w-4/5 outline-none mt-4 resize-none'
                    onChange={handleInputChanges}
                    value={formValues.presentation}
                />

                <div className='flex ml-auto'>
                  <button type='submit' disabled={loading} className='mr-4 hover:underline text-link' onClick={handleSavePic}>Save</button>
                  <button className='mr-4 hover:underline text-link' onClick={handleSkip}>Skip this</button>
                </div>
              </div>
            </form>
          </div>
    </>
)}

export default UserInitConfig