import React from 'react';
import User from '../Posts/User';

const SearchList = ({matchedUsers}) => {
 
    return (
      <div className='bg-white absolute w-7/12 rounded-lg shadow-2xl sd:w-[28%] h-[350px] overflow-auto'>
      {
        matchedUsers.length > 0 
        ? 
          <ul className='overflow-auto' >
          {matchedUsers.map((user) => (
            <li className='hover:bg-gray-text'>
              <User user={user} key={user.user} />
            </li>
          ))
          }
        </ul>
        : <p className='flex items-center h-full justify-center'>No results were found</p>
      }
      </div>
  )
}

export default SearchList