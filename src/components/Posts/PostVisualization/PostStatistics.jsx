import React from 'react'
import { useDispatch } from 'react-redux';
import { setOpenStatsWindow } from '../../../actions/PostStatisticsActions';

const PostStatistics = ({reactions}) => {
 
  const dispatch = useDispatch()

  const handleStatsWindow = (e) => {
    document.getElementById("portal").classList.toggle('opacity')
    document.getElementById("portal").classList.toggle("display-none");
    dispatch(setOpenStatsWindow(reactions))
  }
  
  return (
    <>
      <button className='flex items-center' onClick={handleStatsWindow}>
         {
           reactions.length > 0 && 
             <>
              <img src="./assets/like-reaction.png" className='w-5 h-5' alt="" />
              <img src="./assets/sad-reaction.png" className='w-5 h-5' alt="" />
              <img src="./assets/love-reaction.png" className='w-5 h-5' alt="" />
              <p className='text-[11px] text-[#979797] hover:underline'> {reactions.length} </p>
            </>
          }
      </button>
      <div className='mr-1'>
        <p className='text-[11px] text-[#979797]'>10 shares</p>
      </div>
    </>
  )
}

export default PostStatistics