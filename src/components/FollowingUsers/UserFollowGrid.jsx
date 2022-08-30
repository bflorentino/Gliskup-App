import React, {useEffect} from 'react'
import User from '../Posts/User'
import {useDispatch, useSelector} from 'react-redux'
import BaseURL from '../../services/url'
import { followSuggestedUser, removeOneSuggestedUser } from '../../actions/followingActions'
import { useFetch } from '../../hooks/useFetch'
import { useNotification } from '../../hooks/useNotification'
import { useLocation } from 'react-router-dom'

const UserFollowGrid = ({userFollowInfo}) => {
  
  const dispatch = useDispatch();
  const { handleFetchValues, resultFetch } = useFetch({})
  const userOnline = useSelector(state => state.authReducer)
  const location = useLocation()
  const {user} = userFollowInfo

  const notifySuccesFollow = useNotification({message:`You started following ${user}`, variant:"success"})
  const notifyErrorFollow = useNotification({message:`An error ocurred in following ${user}`, variant:"error"})

  useEffect(()=> {
    
    if(resultFetch === null) return
    
    if(!resultFetch.success){
      notifyErrorFollow.showNotification()
      return
    }

    if(location.pathname === '/gliskup/suggestedUsers')
      dispatch(removeOneSuggestedUser(user))
    else{
      dispatch(followSuggestedUser(user))
    }

    notifySuccesFollow.showNotification()     

  }, [resultFetch, dispatch, user, notifySuccesFollow, notifyErrorFollow, location.pathname])
  
  const handleFollow = (e) => {

    const url =  `${BaseURL}/follow/${userOnline.user}/${user}` 
    handleFetchValues( url, 'POST',{'Content-Type': 'application/json'}) 
  }

  return (
    <div className='flex flex-row items-center justify-between bg-white h-[95px] w-full'>

      <User user={userFollowInfo} sizePic={12}/>
      <button 
        className='mr-4 text-xs lg:text-base  border px-2 text-white bg-auth-primary hover:bg-primary' onClick={handleFollow} > 
          {userFollowInfo.followedByUserOnline ? <p>Following</p> :  <p>Follow</p>}
      </button>
    </div>
  )
}

export default UserFollowGrid