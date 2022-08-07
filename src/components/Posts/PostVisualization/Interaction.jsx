import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeReactionToPost } from '../../../actions/postActions'
import { interactions } from './interactions'
import Reactions from './Reactions'

const Interaction = ({postId, reacted, ownReactionType}) => {
  
  const [viewReactions, setViewReactions] = useState(false)
  const reactionsStyles = 'w-10 h-10 makeReaction';
  const reactionsHoverStyles = '-translate-y-1';
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.authReducer);

  const handleRemoveReaction = () => {
      dispatch(removeReactionToPost({user, postId}))
    }
  
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
              
              {  
                /* Reactions are rendered acording to reacted value. These conditionals, render a reaction type depending the value of ownReactionType. ownReactionType makes references to the reaction made by the online user in a specific post.
                When reacted is false it means there's no a reaction from the user in a post, allowing the user to make a reaction. */
                
                reacted // In case reacted is true (user reacted to post)
                ?
                  <p className={`${interactions[ownReactionType - 1].color} font-bold flex items-center }`}
                    onClick = {handleRemoveReaction}>
                      <img 
                        src= {interactions[ownReactionType - 1].src}
                        alt={interactions[ownReactionType - 1].text}
                        className='w-6 h-6'
                      /> 
                        {interactions[ownReactionType - 1].text} 
                    </p>
                :
                  <p>React To Post</p> // IN case the reaced value is false (user has not reacted to post)
                } 
            </button>)
        }
        <button className='w-1/2 flex items-center py-2 justify-center hover:bg-gray-text'>
            <img src="../../assets/share.png" alt="" className='w-6 mr-1' />
            Share
        </button>
    </div>
  )
}

export default Interaction