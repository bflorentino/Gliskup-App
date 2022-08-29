import React, { useEffect } from 'react'
import { Portal } from 'react-portal'
import { useDispatch, useSelector } from 'react-redux'
import { setSuggestedUsers } from '../../actions/followingActions'
import { useFetch } from '../../hooks/useFetch'
import BaseURL from '../../services/url'
import Followed from './Followed'
import Followers from './Followers'

const FollowUsersWindow = ({toShow, userTo}) => {
 
  const {handleFetchValues, resultFetch} = useFetch({})
  const dispatch = useDispatch()
  const users = useSelector(state => state.followingReducer)
  const userOnline = useSelector(state => state.authReducer)

  useEffect(()=> {
    
    const url = toShow === "followed" 
      ? `${BaseURL}/follow/userFollowed/${userTo}/${userOnline.user}`
      : `${BaseURL}/follow/userFollowers/${userTo}/${userOnline.user}`
    
    handleFetchValues(url, 'GET')

  }, [resultFetch, handleFetchValues, toShow, userOnline, userTo])

  useEffect(()=> {
    
    if(resultFetch === null) return

    if(resultFetch.success){
      dispatch(setSuggestedUsers(resultFetch.data))
    }

  },[resultFetch, dispatch])

  return (
    <Portal node={document.getElementById("portal")}>
      <div className='bg-white flex flex-col mobile:w-[90%] lg:w-[40%] rounded-lg shadow-xl'>
        
        {
          toShow === "followed" ? <Followed users={users} /> : <Followers users={users} />
        }

      </div>
    </Portal>
  )
}

export default FollowUsersWindow