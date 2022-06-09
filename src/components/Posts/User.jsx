import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { clearPosts } from '../../actions/postActions'

const User = ({user:{profilePic, user, name, lastName}, sizePic}) => {

  const dispatch = useDispatch()
  const history = useNavigate();

  const goToProfilePage = () => {  
      dispatch(clearPosts())
      history(`/gliskup/userProfile/${user}`, {replace : true} );
  }

    return (
          <div onClick={goToProfilePage} className='flex flex-row items-center mt-2 hover:cursor-pointer'>
            <img src={profilePic ? profilePic : '../assets/no-user-image.jpg' } alt="" className={`${sizePic ? `w-${sizePic} h-${sizePic}`: 'w-10 h-10'}  rounded-full ml-4`} />
            <div className='flex flex-col'>
                <span className='font-bold font-ubuntu ml-2 hover:underline'>{name} {lastName} </span>
                <span className='font-ubuntu ml-2 text-gray text-sm'>@{user} </span>
            </div>
        </div>
  )
}

export default User