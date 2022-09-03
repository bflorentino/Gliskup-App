import React, { useEffect } from 'react'
import ProptTypes from 'prop-types'
import { Portal } from 'react-portal'
import { useDispatch, useSelector } from 'react-redux'
import { setSuggestedUsers } from '../../actions/followingActions'
import { removeLoading, setLoading } from '../../actions/InterfaceActions'
import { useFetch } from '../../hooks/useFetch'
import BaseURL from '../../services/url'
import Followed from './Followed'
import Followers from './Followers'

const FollowUsersWindow = ({toShow, userTo, setFollowersOpen}) => {
 
  const [handleFetchValues, resultFetch] = useFetch({})
  const dispatch = useDispatch()
  const users = useSelector(state => state.followingReducer)
  const userOnline = useSelector(state => state.authReducer)
  
  useEffect(()=> {

    const url = toShow === "followed" 
      ? `${BaseURL}/follow/userFollowed/${userTo}/${userOnline.user}`
      : `${BaseURL}/follow/userFollowers/${userTo}/${userOnline.user}`
    
    handleFetchValues(url, 'GET')
    dispatch(setLoading())

  }, [handleFetchValues, toShow, userOnline, userTo, dispatch])

  useEffect(()=> {
 
    if(!resultFetch) return

    if(resultFetch.success){
      dispatch(setSuggestedUsers(resultFetch.data))
      dispatch(removeLoading())
    }

  },[resultFetch, dispatch])

  const handleCloseMenu = (e) => {

    document.getElementById("portal").classList.toggle('opacity')
    document.getElementById("portal").classList.toggle("show-modal");
    setFollowersOpen({open: false, toShow: null})
  } 

  return (
    <Portal node={document.getElementById("portal")}>
      <div className='bg-white flex flex-col mobile:w-[90%] lg:w-[35%] rounded-lg shadow-xl'>
        <div className='border-b-2 border-border-line mt-1 flex justify-between'>
          
        {toShow === "followed" 
          ? <h1 className='text-[20px] ml-4'>Followed by this user</h1> 
          : <h1 className='text-[20px] ml-4'>Followers</h1>
          }  

          <span className='mr-1 text-xl hover:rounded-full hover:bg-gray-text'>
            <button className='px-3 py-1' onClick={handleCloseMenu}>X</button>  
          </span>
        </div>
        {
          toShow === "followed" ? <Followed users={users} /> : <Followers users={users} />
        }

      </div>
    </Portal>
  )
}

export default FollowUsersWindow

FollowUsersWindow.propTypes = {
  toShow : ProptTypes.string.isRequired,
  userTo: ProptTypes.string.isRequired,
  setFollowersOpen: ProptTypes.func.isRequired
}