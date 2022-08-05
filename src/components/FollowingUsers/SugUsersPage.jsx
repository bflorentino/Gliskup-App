import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MainNavBar from '../Navigation/MainNavBar'
import UserFollowGrid from './UserFollowGrid'
import { setSuggestedUsersAsync } from '../../actions/followingActions'

const SugUsersPage = () => {
  
  const { user } = useSelector(state => state.authReducer)
  const suggestedUsers = useSelector(state => state.followingReducer) 
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(setSuggestedUsersAsync(user))
  }, [user, dispatch])

  return (
    <div className='flex flex-col h-screen w-full'>
      <MainNavBar />
      <main className='flex flex-col items-center w-full overflow-auto mt-[70px]'>

        <h1 className='text-3xl text-white font-bold font-inter'>Suggestions</h1>

        <ul className = 'w-[90%] sd:w-[70%] lg:w-1/2  mb-12'>
          {
            suggestedUsers.map(user => (
              <UserFollowGrid key={user.user} user={user} />
            ))
          }
        </ul>
      </main>
    </div>
  )
}

export default SugUsersPage