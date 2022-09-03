import React from 'react'
import PropTypes from 'prop-types'
import { interactions } from './interactions'

const ReactionsIcons = ({reactionsStyles, reactionsHoverStyles, handleReaction}) => {

  return (
      <>
          <ul className='flex justify-between w-full'>
          {
            interactions.map((interaction, index) => (
             
             <li key={interaction.text}>

                <button className='outline-none' onClick={() => handleReaction(index + 1)}>
                   <img src={interaction.src} alt="interaction.text" className={`${reactionsStyles} hover:${reactionsHoverStyles}`} title={interaction.text} />
                 </button>

              </li>
           ))
          }  
          </ul>
      </>
  )
}
export default ReactionsIcons

ReactionsIcons.propTypes = {
  reactionsStyles: PropTypes.string.isRequired,
  reactionsHoverStyles: PropTypes.string,
  handleReaction: PropTypes.func.isRequired
}