import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom';
import { logout } from '../../actions/authActions';
import { clearPosts } from '../../actions/postActions';
import { removeProfileData } from '../../actions/usersActions';


const MainNavBar = () => {

  const {user, name, lastName, profilePic} = useSelector(state => state.authReducer);
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false)
  const history = useNavigate();
  const location = useLocation();

  const handleMenuClick = () => {
    const menu = document.querySelector('#menu')
    menu.classList.toggle("hidden")
    setIsOpen(!isOpen)
  }

  const handleLogout = () => {
    dispatch(logout())
    dispatch(clearPosts())
  }
  
  const goToProfilePage = () => {
    if(location.pathname !== `/gliskup/userProfile/${user}`){
      dispatch(removeProfileData())
      dispatch(clearPosts())
      history(`/gliskup/userProfile/${user}`, {replace:true} );
    }
  }

  const goToHomePage = () => {
    if(location.pathname !== '/gliskup/feed'){
      dispatch(clearPosts())
      dispatch(removeProfileData())
      history(`/gliskup/feed`, {replace:true});
    }
  }

  return (
    <>
        <svg
          className={`lg:hidden ${isOpen && 'hidden'} flex items-center cursor-pointer mt-2 ml-2`}
          fill="#fff"
          viewBox="0 0 100 80"
          width="40"
          height="40"
          onClick={handleMenuClick}
          id='ham'
       >
      <rect width="60" height="6"></rect>
      <rect y="20" width="60" height="6"></rect>
      <rect y="40" width="60" height="6"></rect>
    </svg>
      <nav 
        className='hidden h-screen 
          lg:flex flex-col lg:w-1/4 lg:relative bg-auth-primary
          mobile:w-4/5 mobile:fixed  sd:w-3/5 border-r border-gray' 
        id='menu'
        >
          <div className='w-full flex justify-end'>
            <button className='text-white text-4xl font-bold lg:hidden mr-4' onClick={handleMenuClick}>
              x
            </button>
          </div>
            <div className='flex flex-row items-center ml-2 mt-8'>
              <img 
                src={profilePic ? profilePic : '../assets/no-user-image.jpg'} alt="Your profile" className='w-12 h-12 rounded-full' 
              />
              <div className='text-white font-ubuntu flex flex-col ml-2'>
                <span className='text-white font-ubuntu'>{name} {lastName}</span>
                <span className='text-gray-text font-ubuntu'>@{user} </span>
              </div>
            </div>

            <ul className=' text-white font-ubuntu font-bold text-lg mt-12 ' >
                <li className=''>
                  <button onClick={goToHomePage}  className='mt-4 cursor-pointer flex flex-row items-center rounded-lg p-2 hover:bg-[#8D71B4] w-full'>
                      <img src="../../assets/home.png" alt="Home" className='w-10' /> Home
                  </button>
                </li>
                <li className='mt-4 cursor-pointer flex flex-row items-center rounded-lg p-2 hover:bg-[#8D71B4]'>
                <img src="../../assets/notifications.png" alt="Notfications" className='w-10' />  Notifications
                </li>
                <li >
                  <button onClick={goToProfilePage} className='mt-4 cursor-pointer flex flex-row items-center rounded-lg p-2 hover:bg-[#8D71B4] w-full' >
                    <img src="../../assets/Profile.png" alt="Profile" className='w-10' /> My Profile
                  </button>
                </li>
                <li className='mt-4 cursor-pointer flex flex-row items-center rounded-lg p-2 hover:bg-[#8D71B4]'>
                  <button className='flex' onClick={handleLogout}>
                    <img src="../../assets/Logout.png" alt="Logout" className='w-10' />  Logout
                  </button>
                </li>
            </ul>
      </nav>
    </>
  )
}

export default MainNavBar