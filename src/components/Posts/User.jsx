import React from 'react'
import ProptTypes from 'prop-types'
import { useLocation, useNavigate } from 'react-router-dom'

const User = ({user, sizePic}) => {

  const history = useNavigate();
  const location = useLocation()

  const goToProfilePage = () => {
    if(location.pathname !== `/gliskup/userProfile/${user.user}`){
      history(`/gliskup/userProfile/${user.user}` );
    }
  }

    return (
          <div onClick={goToProfilePage} className='flex flex-row items-center mt-2 hover:cursor-pointer'>
            <img src={user.profilePic ? user.profilePic : '../../assets/no-user-image.jpg' } alt="" className={`${sizePic ? `w-${sizePic} h-${sizePic}`: 'w-10 h-10'}  rounded-full ml-4`} />
            <div className='flex flex-col'>
                <span className='font-bold font-ubuntu ml-2 hover:underline'>{user.name} {user.lastName} </span>
                <span className='font-ubuntu ml-2 text-gray text-sm'>@{user.user} </span>
            </div>
        </div>
  )
}

export default User

User.propTypes = {
  user: ProptTypes.object.isRequired,
  sizePic: ProptTypes.number
}