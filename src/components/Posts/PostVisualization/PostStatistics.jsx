import React from 'react'
import { useDispatch } from 'react-redux';
import { setOpenStatsWindow } from '../../../actions/PostStatisticsActions';

const PostStatistics = () => {
 
  const dispatch = useDispatch()

  const handleStatsWindow = (e) => {

    document.getElementById("portal").classList.toggle('opacity')
    document.getElementById("portal").classList.toggle("display-none");
    dispatch(setOpenStatsWindow())
  }

  return (
    <>
      <button className='flex items-center' onClick={handleStatsWindow}>
        <img src="./assets/like-reaction.png" className='w-5 h-5' alt="" />
        <img src="./assets/sad-reaction.png" className='w-5 h-5' alt="" />
        <img src="./assets/love-reaction.png" className='w-5 h-5' alt="" />
        <p className='text-[11px] text-[#979797] hover:underline'>500</p>
      </button>
      <div className='mr-1'>
        <p className='text-[11px] text-[#979797]'>10 shares</p>
      </div>
    </>
  )
}

export default PostStatistics