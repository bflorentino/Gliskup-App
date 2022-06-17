import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom';
import { logout } from '../../actions/authActions';
import { clearPosts } from '../../actions/postActions';
import { removeProfileData } from '../../actions/usersActions';
import Search from '../Search/Search';

const MainNavBar = () => {

  const {user, profilePic} = useSelector(state => state.authReducer);
  const dispatch = useDispatch()
  // const [isOpen, setIsOpen] = useState(false)
  const history = useNavigate();
  const location = useLocation();

  // const handleMenuClick = () => {
  //   const menu = document.querySelector('#menu')
  //   menu.classList.toggle("hidden")
  //   setIsOpen(!isOpen)
  // }

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
        {/* <svg
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
    </svg> */}
      <nav 
        className='flex flex-row justify-between items-center bg-auth-primary
          mobile:w-full mobile:fixed  border-r border-gray h-[65px]' 
        id='menu'
        >
          {/* <div className='w-full flex justify-end'>
            <button className='text-white text-4xl font-bold lg:hidden mr-4' onClick={handleMenuClick}>
              x
            </button>
          </div> */}
          <div className='flex w-1/2 items-center'>
            <button onClick={goToHomePage} className='sd:ml-8'>
              <img src='../../assets/collaboration.png' alt='' className='w-12 h-12' /></button>
            <Search />
          </div>
            <div className='flex sd:mr-8' >

              <ul className=' text-white font-ubuntu font-bold text-lg flex' >
                  <li className=''>
                    <button onClick={goToHomePage}  className='cursor-pointer flex flex-row items-center justify-center rounded-lg p-2 hover:bg-[#8D71B4] w-full mr-2 sd:mr-4'>
                      <img src="../../assets/home2.png" alt="Home" title='Home' className='w-7 h-7' /> 
                    </button>
                  </li>
                  {/* <li >
                    <button className='cursor-pointer flex flex-row items-center rounded-lg p-2 hover:bg-[#8D71B4] w-full' >
                      <img src="../../assets/notifications.png" alt="Notfications" className='w-6' />  Notifications
                    </button>
                  </li> */}
                  <li >
                    <button onClick={goToProfilePage} className='cursor-pointer flex flex-row items-center justify-center rounded-lg p-2 hover:bg-[#8D71B4] w-full mr-2 sd:mr-4 ' >
                      <img src="../../assets/Profile2.png" alt="Profile" title='My profile' className='w-7 h-7' />
                    </button>
                  </li>
                  <li >
                    <button className='cursor-pointer flex flex-row items-center rounded-lg p-2 hover:bg-[#8D71B4] mr-2 sd:mr-4' onClick={handleLogout}>
                      <img src="../../assets/logout2.png" alt="Logout" title='logout' className='w-7 h-7' />  
                    </button>
                  </li>
              </ul>
              <div className='flex flex-row items-center'>
                <img 
                  src={profilePic ? profilePic : '../assets/no-user-image.jpg'} alt="" className='w-6 h-6  sd:w-9 sd:h-9 rounded-full' 
                />
                <div className='text-white font-ubuntu flex flex-col ml-2 mr-4 sd:mr-12'>
                  <span className='text-white font-intel font-bold'>Me </span>
                  {/* <span className='text-gray-text font-ubuntu'>@{user} </span> */}
                </div>
              </div>

            </div>
      </nav>
    </>
  )
}

export default MainNavBar