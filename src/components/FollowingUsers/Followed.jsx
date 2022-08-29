import React from 'react'

const Followed = ({users}) => {
  
  console.log(users)

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

export default Followed