import React, {useEffect} from 'react'
import User from '../Posts/User'
import {useDispatch, useSelector} from 'react-redux'
import BaseURL from '../../services/url'
import { removeOneSuggestedUser } from '../../actions/followingActions'
import { useFetch } from '../../hooks/useFetch'
import { useNotification } from '../../hooks/useNotification'

const UserFollowGrid = ({user}) => {
  
  const dispatch = useDispatch();
  const { handleFetchValues, resultFetch } = useFetch({})
  const userOnline = useSelector(state => state.authReducer)

  const notifySuccesFollow = useNotification({message:`You started following ${user.user}`, variant:"success"})
  const notifyErrorFollow = useNotification({message:`An error ocurred in following ${user.user}`, variant:"error"})

  useEffect(()=> {
    
    if(resultFetch === null){
      return
    } 
    
    if(resultFetch.success){
      dispatch(removeOneSuggestedUser(user.user))
      notifySuccesFollow.showNotification()     
    }
    else{
      notifyErrorFollow.showNotification()
    }

  }, [resultFetch, dispatch, user, notifySuccesFollow, notifyErrorFollow])
  
  const handleFollow = (e) => {

    const url =  `${BaseURL}/follow/${userOnline.user}/${user.user}` 
    handleFetchValues( url, 'POST',{'Content-Type': 'application/json'}) 
  }

  return (
    <div className='flex flex-row items-center justify-between bg-white h-[95px] mt-4 w-full'>

      <User user={user} sizePic={12}/>
      <button className='mr-4 text-xs lg:text-base  border px-2 text-white bg-auth-primary hover:bg-primary' onClick={handleFollow} > Follow</button>
    </div>
  )
}

export default UserFollowGrid