import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUsersToSearch, removeUsersToSearch } from '../../actions/searchUserActions';
import SearchList from './SearchList';

const Search = () => {

  const [ searchPattern, setSearchPattern ] = useState(""); 
  const dispatch = useDispatch();
  const matchedUsers = useSelector(state => state.searchReducer);

  useEffect(() => {
    if(searchPattern !== ""){
      dispatch(getUsersToSearch(searchPattern))
    }
    if(searchPattern === "" ){
      dispatch(removeUsersToSearch())
    }
  }, [searchPattern, dispatch])

  const handleInputChanges = (e) => {
    setSearchPattern(e.target.value);
  }

  return (
        <>
        <div className='w-11/12 sd:w-6/12' >
            <input 
                type="text" 
                className='search bg-transparent text-white w-full p-2  mt-1 h-[35px] sd:h-[40px] ml-2 rounded-lg'
                placeholder='Search'
                name='search'
                autoComplete='off'
                value={searchPattern}
                onChange={handleInputChanges}
                />
          {
            (matchedUsers && searchPattern !== "") &&
            <SearchList matchedUsers={matchedUsers} />
            }
          </div>
        </>
  )
}

export default Search