import React from 'react'
import { useSelector } from 'react-redux'
import UserFollowGrid from './UserFollowGrid'

const Followers = ({users}) => {

  const {loading} = useSelector(state => state.interfaceReducer)
 
  return (
    <div className='h-[400px] overflow-auto'>
        {
        !loading 
          ? (users.length > 0 

            ? users.map((user, i) => (
                <li key = {i} className='list-none border-b border-border-line'>
                  <UserFollowGrid  userFollowInfo={user} />
                </li>
                ))
            :<p className='flex justify-center items-center h-full font-ubuntu text-lg'>No followers</p>
          )
        :<p className='flex justify-center items-center h-full font-ubuntu text-lg'>Getting Users...</p>
      }
    </div>
  )
}

export default Followers