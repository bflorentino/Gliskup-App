import React from 'react';
import User from '../Posts/User';

const SearchList = ({matchedUsers}) => {
 
    return (
        <ul className='container absolute w-10/12 rounded-b-lg shadow-2xl sd:w-2/6 h-[350px] overflow-auto bg-white' id='searchList' >
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