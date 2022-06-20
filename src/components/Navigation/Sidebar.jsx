import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom';
import { logout } from '../../actions/authActions';
import { clearPosts } from '../../actions/postActions';
import { removeProfileData } from '../../actions/usersActions';

const Sidebar = () => {

  const userOnline = useSelector(state => state.authReducer);
  // const userData = useSelector(state => state.usersReducer);
  const dispatch = useDispatch();
  const history = useNavigate()
  const location = useLocation()

  const handleLogout = () => {
    dispatch(logout())
    dispatch(clearPosts())
  }
  
  const goToProfilePage = () => {
    if(location.pathname !== `/gliskup/userProfile/${userOnline.user}`){
      dispatch(removeProfileData())
      dispatch(clearPosts())
      history(`/gliskup/userProfile/${userOnline.user}`, {replace:true} );
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
    <aside 
        className='hidden xl:flex xl:flex-col bg-auth-primary mt-[90px] w-[20%] h-4/5 ml-4 rounded-xl'
    >
      <div className=' h-[70px] rounded-t bg-transparent' >
        <div className='flex justify-center '>
          <img 
            src={userOnline.profilePic || '../../assets/no-user-image.jpg' } 
            alt="Me" 
            className='w-20 h-20 rounded-full mt-6 border-4 border-green-user' 
          />
        </div>
      </div>
      <div className='flex flex-col mt-9 text-center'>
        <p className='text-white font-thin font-inter text-xl'>{`${userOnline.name} ${userOnline.lastName}`}</p>
        <p className='text-gray-text font-thin'>@{`${userOnline.user}`}</p>
      </div>
      <div>
        <p className='text-gray-text font-thin text-center mt-4'>No presentation to show you</p>
        
        <div className='flex mt-2 justify-center text-gray-text'>
          <p className='flex flex-col border-r ml-2 px-2'>
            <span className='text-center'>100</span> posts
          </p>
          <p className='flex flex-col border-r ml-2 px-2'>
            <span className='text-center'>100</span> followers
          </p>
          <p className='flex flex-col ml-2 px-1'>
            <span className='text-center'>100</span > following
          </p>
        </div>

      </div>
      <ul className='mt-4 flex flex-col ml-4'>
        <li>
          <button onClick={goToHomePage} className='cursor-pointer flex flex-row items-center  rounded-lg p-2 w-full hover:text-blue-bar'>
            <img src="../../assets/home.png" alt="Home" title='Home' className='w-7 h-7' />
            <p className='text-gray-text ml-2 hover:text-blue-bar'>Feed</p>  
          </button>
        </li>
        <li>
         <button onClick={goToProfilePage} className='cursor-pointer flex flex-row items-center  rounded-lg p-2 w-full mt-6 hover:text-blue-bar'>
          <img src="../../assets/profile.png" alt="profile" title='profile' className='w-7 h-7' />
          <p className='text-gray-text ml-2 hover:text-blue-bar'>Profile</p>  
         </button>
        <button onClick={handleLogout} className='cursor-pointer flex flex-row items-center  rounded-lg p-2 w-full mt-6 '>
          <img src="../../assets/logout.png" alt="Home" title='Sign Out' className='w-7 h-7' />
          <p className='text-gray-text ml-2 hover:text-blue-bar'>Sign Out</p>  
        </button>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar