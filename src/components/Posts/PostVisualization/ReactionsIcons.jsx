import React from 'react'

const ReactionsIcons = ({reactionsStyles, reactionsHoverStyles, handleReaction}) => {

  return (
      <>
        <button className='outline-none' onClick={() => handleReaction(1)}>
          <img src="../../assets/like-reaction.png" alt="like" className={`${reactionsStyles} hover:${reactionsHoverStyles}`} title='Like' />
        </button>
        <button className='outline-none' onClick={() => handleReaction(2)}>
          <img src="../../assets/love-reaction.png" alt="" className={`${reactionsStyles} hover:${reactionsHoverStyles}`} title='Love' />
        </button>
        <button className='outline-none' onClick={() => handleReaction(3)}>
          <img src="../../assets/funny-reaction.png" alt="" className={`${reactionsStyles} hover:${reactionsHoverStyles}`} title='Funny' />
        </button>
        <button className='outline-none' onClick={() => handleReaction(4)}>
          <img src="../../assets/sad-reaction.png" alt="" className={`${reactionsStyles} hover:${reactionsHoverStyles}`} title='Sad' />
        </button>
        <button className='outline-none' onClick={() => handleReaction(5)}>
          <img src="../../assets/surprise-reaction.png" alt="" className={`${reactionsStyles} hover:${reactionsHoverStyles}`} title='Surprised' />
        </button>
        <button className='outline-none' onClick={() => handleReaction(6)}>
          <img src="../../assets/angry-reaction.png" alt="" className={`${reactionsStyles} hover:${reactionsHoverStyles}`} title='Angry' />
        </button>
        <button className='outline-none' onClick={() => handleReaction(7)}>
          <img src="../../assets/curious-reaction.png" alt="" className={`${reactionsStyles} hover:${reactionsHoverStyles}`} title='Curious' />
        </button>
      </>
  )
}
export default ReactionsIcons