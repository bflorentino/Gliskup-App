import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../actions/authActions';

const MainNavBar = () => {

  const {user, name, lastName, profilePic} = useSelector(state => state.authReducer);
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
  } 

  return (
    <nav 
      className='flex flex-col justify-start w-1/4 h-screen '
      >
        <div className='flex flex-row items-center ml-8 mt-8'>
          <img 
            src={profilePic ? profilePic : '../assets/no-user-image.jpg'} alt="Your profile" className='w-12 rounded-full' 
          />
          <div className='text-white font-ubuntu flex flex-col ml-2'>
            <span className='text-white font-ubuntu'>{name} {lastName}</span>
            <span className='text-gray-text font-ubuntu'>@{user} </span>
          </div>
        </div>

        <ul className='text-white font-ubuntu font-bold text-lg ml-8 mt-12 '>
            <li className='mt-6 cursor-pointer flex flex-row items-center'>
               <img src="../assets/home.png" alt="Home" className='w-10' /> Home
            </li>
            <li className='mt-6 cursor-pointer flex flex-row items-center'>
             <img src="../assets/notifications.png" alt="Notfications" className='w-10' />  Notifications
            </li>
            <li className='mt-6 cursor-pointer flex flex-row items-center'>
              <img src="../assets/Profile.png" alt="Profile" className='w-10' /> My Profile
            </li>
            <li className='mt-6 cursor-pointer flex flex-row items-center'>
              <button className='flex' onClick={handleLogout}>
                <img src="../assets/Logout.png" alt="Logout" className='w-10' />  Logout
              </button>
            </li>
        </ul>
    </nav>
  )
}

export default MainNavBar