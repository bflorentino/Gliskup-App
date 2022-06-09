import React from 'react'
import { useDispatch } from 'react-redux'
import { setClosedStatsWindow, setReactionTypeStats } from '../../../actions/PostStatisticsActions'
import ReactionsIcons from '../PostVisualization/ReactionsIcons'

const ReactionsMenu = ({reactions}) => {

  const dispatch = useDispatch()
  const reactionsStyles = 'w-6us h-6 reactionStats'

  const handleCloseMenu = (e) => {

    document.getElementById("portal").classList.toggle('opacity')
    document.getElementById("portal").classList.toggle("display-none");
    dispatch(setClosedStatsWindow())
  } 

  const handleReactionStats = (type, e) => {
    dispatch(setReactionTypeStats(reactions, type))
  }

  return (
    <>
    <div className= 'border-b-2 border-border-line mt-1'>
      <div className='flex justify-between'>
        <h1 className='text-[22px] ml-4'>Reactions</h1>
        <span className='hover:bg-gray-text text-gray font-ubuntu font-bold rounded-full mr-3'>
            <button className='text-xl px-3 py-1' onClick={handleCloseMenu}>X</button>
        </span>
      </div>
        <div className='flex m-auto justify-between w-[90%]'>
          <button onClick={()=> handleReactionStats(0)}>All</button>
          <ReactionsIcons reactionsStyles={reactionsStyles} handleReaction={handleReactionStats} />
      </div>
    </div>
    </>
  )
}

export default ReactionsMenu