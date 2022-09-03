import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { logout } from '../../actions/authActions';
import Search from '../Search/Search';

const MainNavBar = () => {

  const {user, profilePic} = useSelector(state => state.authReducer);
  const dispatch = useDispatch()
  const history = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    dispatch(logout())
  }
  
  const goToProfilePage = () => {
    if(location.pathname !== `/gliskup/userProfile/${user}`){
      history(`/gliskup/userProfile/${user}` );
    }
  }

  const goToHomePage = () => {
    if(location.pathname !== '/gliskup/feed'){
      history(`/gliskup/feed`, {replace:true});
    }
  }

  return (
    <>
      <nav 
        className='flex flex-row justify-between items-center bg-auth-primary
          mobile:w-full mobile:fixed  border-r border-gray h-[65px]' 
        id='menu'
        >
          <div className='flex w-1/2 items-center'>
            <button onClick={goToHomePage} className='sd:ml-8'>
              <img src='../../assets/collaboration.png' alt='' className='w-12 h-12' /></button>
            <Search />
          </div>
            <div className='flex sd:mr-8 ml-2' >

              <ul className=' text-white font-ubuntu font-bold text-lg flex' >
                  <li className=''>
                    <button onClick={goToHomePage}  className='cursor-pointer flex flex-row items-center justify-center rounded-lg py-2 px-1 sd:p-2 hover:bg-[#8D71B4] w-full sd:mr-2'>
                      <img src="../../assets/home2.png" alt="Home" title='Home' className='w-5 h-5 sd:w-7 sd:h-7'  /> 
                    </button>
                  </li>
                  <li >
                    <button onClick={goToProfilePage} className='cursor-pointer flex flex-row items-center justify-center rounded-lg py-2 px-1 sd:p-2 hover:bg-[#8D71B4] w-full  sd:mr-2 ' >
                      <img src="../../assets/Profile2.png" alt="Profile" title='My profile' className='w-5 h-5 sd:w-7 sd:h-7' />
                    </button>
                  </li>
                  <li >
                    <Link to={'/gliskup/suggestedUsers'} className='cursor-pointer flex flex-row items-center justify-center rounded-lg py-2 px-1 sd:p-2 hover:bg-[#8D71B4] w-full sd:mr-2 ' >
                      <img src="../../assets/navigation/sugerencia2.png" alt="Profile" title='Suggestions' className='w-5 h-5 sd:w-7 sd:h-7' />
                    </Link>
                  </li>
                  <li >
                    <button className='cursor-pointer flex flex-row items-center rounded-lg py-2 px-1 sd:p-2 hover:bg-[#8D71B4]  sd:mr-2' onClick={handleLogout}>
                      <img src="../../assets/logout2.png" alt="Logout" title='logout' className='w-5 h-5 sd:w-7 sd:h-7'  />  
                    </button>
                  </li>
              </ul>
              <div className='flex flex-row items-center'>
                <img 
                  src={profilePic ? profilePic : '../../assets/no-user-image.jpg'} alt="" className='w-6 h-6  sd:w-9 sd:h-9 rounded-full' 
                />
                <div className='text-white font-ubuntu flex flex-col ml-2 mr-4 sd:mr-12'>
                  <span className='text-white font-intel font-bold'>Me </span>
                </div>
              </div>
            </div>
      </nav>
    </>
  )
}

export default MainNavBar