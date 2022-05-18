import React, { useState } from 'react'
import Reactions from './Reactions'

const Interaction = ({postId, reacted}) => {
  
  const [viewReactions, setViewReactions] = useState(false)
  const reactionsStyles = 'w-10 h-10 ';
  const reactionsHoverStyles = '-translate-y-1';

  return (
    <div className='mx-4 p-1 pb-2 border-t border-border-line flex'>
        {
          viewReactions 
            ? ( 
              <div onMouseLeave={() => setViewReactions(false)}>
                <Reactions 
                  reactionsStyles={reactionsStyles} 
                  reactionsHoverStyles = {reactionsHoverStyles}
                  postId = {postId}
                />
              </div> 
            )
            :(<button 
              className= 'flex items-center justify-center py-2 w-1/2 hover:bg-gray-text'
              onMouseEnter={() => !reacted && setViewReactions(true)} 
            >
                {/* <img src="../assets/Like.png" alt="" className='w-6 mr-1' /> */}
                <p className={`${reacted && 'text-link ' }`}>React to Post</p> 
            </button>)
        }
        <button className='w-1/2 flex items-center py-2 justify-center hover:bg-gray-text'>
            <img src="../assets/share.png" alt="" className='w-6 mr-1' />
            Share
        </button>
    </div>
  )
}

export default Interaction