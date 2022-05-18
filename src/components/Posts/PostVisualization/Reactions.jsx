import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { reactToPost } from '../../../actions/postActions'
import ReactionsIcons from './ReactionsIcons'

const Reactions = ({reactionsStyles, reactionsHoverStyles, postId}) => {

  const dispatch = useDispatch();
  const { user } = useSelector(state => state.authReducer);

  const handleReaction = (reactionType, e) => {
    console.log(reactionType)
    dispatch(reactToPost({
      user,
      reactionType,
      postId
    }))
  }

  return (
    <div>
      
      <div className='flex ml-4 bg-white rounded-xl shadow-2xl border border-border-line'>
        
        <ReactionsIcons  
            reactionsStyles={reactionsStyles}
            reactionsHoverStyles = {reactionsHoverStyles} 
            handleReaction={handleReaction} 
        />        

      </div>
    </div>
  )
}

export default Reactions