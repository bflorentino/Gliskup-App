import React from 'react'
import { useDispatch } from 'react-redux'
import { setClosedStatsWindow } from '../../../actions/PostStatisticsActions'
import ReactionsIcons from '../PostVisualization/ReactionsIcons'

const ReactionsMenu = () => {

  const dispatch = useDispatch()
  const reactionsStyles = 'w-9 h-9'

  const handleCloseMenu = (e) => {

    document.getElementById("portal").classList.toggle('opacity')
    document.getElementById("portal").classList.toggle("display-none");
    dispatch(setClosedStatsWindow())
  } 

  const handleReactionClick = (reaction) => {
    console.log("Se presiono un boton")
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
        <div className='flex m-auto justify-between w-[90%] mb-1'>
          <ReactionsIcons reactionsStyles={reactionsStyles} />
      </div>
    </div>
    </>
  )
}

export default ReactionsMenu