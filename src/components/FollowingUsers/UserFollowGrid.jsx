import React, { useEffect } from 'react'
import ProptTypes from 'prop-types'
import User from '../Posts/User'
import {useDispatch, useSelector} from 'react-redux'
import BaseURL from '../../services/url'
import { followSuggestedUser, removeOneSuggestedUser, updateProfileFollow } from '../../actions/followingActions'
import { useFetch } from '../../hooks/useFetch'
import { useNotification } from '../../hooks/useNotification'
import { useLocation, useParams } from 'react-router-dom'

const UserFollowGrid = ({userFollowInfo, applyMt}) => {

  const dispatch = useDispatch();
  const [ handleFetchValues, resultFetch, resetFetchValues ] = useFetch({})
  const userOnline = useSelector(state => state.authReducer)
  const location = useLocation()
  const {userRequest} = useParams()
  const {showNotification, handleNotificationParams, notificationParams} = useNotification({})

  useEffect(()=> {
    
    if(resultFetch === null) return
    
    if(!resultFetch.success){
      handleNotificationParams(`An error ocurred in following ${userFollowInfo.user}`, "error")
      return
    }

    resultFetch.message === "Started Following" 
    ? handleNotificationParams(`You started following ${userFollowInfo?.user}`, "success")
    : handleNotificationParams(`You stoped following ${userFollowInfo?.user}`, "warning")   

    if(location.pathname === '/gliskup/suggestedUsers')
    dispatch(removeOneSuggestedUser(userFollowInfo.user))
    else{
      dispatch(followSuggestedUser(userFollowInfo.user))
    }

    resetFetchValues()

  }, [resultFetch, dispatch, userFollowInfo.user, handleNotificationParams, location.pathname, resetFetchValues])
  
  useEffect(()=> {
    showNotification()
  }, [notificationParams, showNotification])

  const handleFollow = (act) => {

    const url = act 
      ? `${BaseURL}/follow/${userOnline.user}/${userFollowInfo.user}`
      : `${BaseURL}/follow/unfollow/${userOnline.user}/${userFollowInfo.user}`

      handleFetchValues( url, 'POST',{'Content-Type': 'application/json'})

      if(location.pathname !== '/gliskup/suggestedUsers')
      {
        let isOwnProfile = userOnline.user === userRequest ? true: false 
        dispatch(updateProfileFollow(act, isOwnProfile))
      }
  }

  return (
    <div className={`flex flex-row items-center justify-between bg-white h-[95px] w-full ${applyMt && 'mt-4'}`}>
      <User user={userFollowInfo} sizePic={12}/>   
      {
        userFollowInfo.user !== userOnline.user &&(
        <button 
            className='mr-4 text-xs lg:text-base  border px-2 text-white bg-auth-primary hover:bg-primary' 
            onClick= {userFollowInfo.followedByUserOnline ? () => handleFollow(false): () => handleFollow(true)  }  
          > 
              {userFollowInfo.followedByUserOnline ? <p>Following</p> : <p>Follow</p> }
          </button>
        )
      }
    </div>
  )
}

export default UserFollowGrid

UserFollowGrid.propTypes = {
  userFollowInfo: ProptTypes.object.isRequired,
  applyMt: ProptTypes.bool
}