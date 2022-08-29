import React from 'react'

const Followers = ({users}) => {
  return (
    <div className='`h-[400px] overflow-auto'>
        {
            users.map(user => (
                <p>{user.user}</p>
            ))
        }
    </div>
  )
}

export default Followers