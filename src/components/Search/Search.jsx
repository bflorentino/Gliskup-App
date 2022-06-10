import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { getUsersToSearch } from '../../actions/searchUserActions';

const Search = () => {

  const [ searchPattern, setSearchPattern ] = useState(""); 
  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(getUsersToSearch())
  }, [searchPattern, dispatch])

  const handleInputChanges = (e) => {
    setSearchPattern(e.target.value);
  }

  return (
          <input 
              type="text" 
              className='search bg-transparent text-white p-2 w-11/12 sd:w-8/12 mt-1'
              placeholder='Search'
              name='search'
              value={searchPattern}
              onChange={handleInputChanges}
          />
  )
}

export default Search