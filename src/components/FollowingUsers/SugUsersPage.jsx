import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MainNavBar from '../Navigation/MainNavBar'
import UserFollowGrid from './UserFollowGrid'
import { setSuggestedUsers } from '../../actions/followingActions'
import { useFetch } from '../../hooks/useFetch'
import BaseURL from '../../services/url'
import Loading from '../ui/Loading'

const SugUsersPage = () => {
  
  const { user } = useSelector(state => state.authReducer)
  const suggestedUsers = useSelector(state => state.followingReducer) 
  const [ areUsersCharged, setUsersCharged ] = useState(false);
  const dispatch = useDispatch();
  const [handleFetchValues, resultFetch] = useFetch();

  useEffect(()=> {
    handleFetchValues(`${BaseURL}/follow/suggestedUsers/${user}`, 'GET') 
  }, [user, handleFetchValues])

  useEffect(() => {
    if(!resultFetch) return

    if(resultFetch.success){
      dispatch(setSuggestedUsers(resultFetch.data))
      setUsersCharged(true)
    }

  }, [resultFetch, dispatch])

  return (
    <div className='flex flex-col h-screen w-full'>
      <MainNavBar />
      <main className='flex flex-col items-center w-full overflow-auto mt-[70px]'>

        <h1 className='text-3xl text-white font-bold font-inter'>Suggestions</h1>
        
        {
          areUsersCharged 
          ? 
            <ul className = 'w-[90%] sd:w-[70%] lg:w-1/2  mb-12'>
            {
              suggestedUsers.map(user => (
                <UserFollowGrid key={user.user} userFollowInfo={user} applyMt={true} />
              ))
            }
          </ul>
          : <Loading />
          }

      </main>
    </div>
  )
}

export default SugUsersPage