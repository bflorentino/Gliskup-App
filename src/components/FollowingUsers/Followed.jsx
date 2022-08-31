import React from 'react'
import { useSelector } from 'react-redux'
import UserFollowGrid from './UserFollowGrid'

const Followed = ({users}) => {

  const {loading} = useSelector(state => state.interfaceReducer)

  return (
    <div className='h-[400px] overflow-auto'>
    {
      !loading ?

        (users.length > 0
        ?
          users.map(user => (
            <li key = {user.user} className='list-none border-b border-border-line'>
              <UserFollowGrid  userFollowInfo={user} applyMt={false} />
            </li>
          ))
        : <p className='flex justify-center items-center h-full font-ubuntu text-lg'>No followed</p>)  
    :
    <p className='flex justify-center items-center h-full font-ubuntu text-lg'>Getting Users...</p>
    }

  </div>
  )
}

export default Followed