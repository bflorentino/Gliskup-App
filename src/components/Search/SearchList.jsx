import React from 'react';
import User from '../Posts/User';

const SearchList = ({matchedUsers}) => {
 
    return (
        <ul className='container absolute w-7/12 rounded-lg shadow-2xl sd:w-[28%] h-[350px] overflow-auto bg-white' id='searchList' >
        {matchedUsers.map((user) => (
          <li className='hover:bg-gray-text'>
            <User user={user} key={user.user} />
          </li>
        ))
        }
      </ul>
  )
}

export default SearchList