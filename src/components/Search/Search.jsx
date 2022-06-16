import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { getUsersToSearch } from '../../actions/searchUserActions';

const Search = () => {

  const [ searchPattern, setSearchPattern ] = useState(""); 
  const dispatch = useDispatch();
 
  useEffect(() => {
    if(searchPattern !== "")
      dispatch(getUsersToSearch(searchPattern))
  }, [searchPattern, dispatch])

  const handleInputChanges = (e) => {
    setSearchPattern(e.target.value);
  }

  return (
          <input 
              type="text" 
              className='search bg-transparent text-white p-2 w-11/12 sd:w-4/12 mt-1 h-[35px]'
              placeholder='Search'
              name='search'
              value={searchPattern}
              onChange={handleInputChanges}
          />
  )
}

export default Search