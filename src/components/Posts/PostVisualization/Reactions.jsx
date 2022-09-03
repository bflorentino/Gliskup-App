import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { reactToPost} from '../../../actions/postActions'
import ReactionsIcons from './ReactionsIcons'

const Reactions = ({reactionsStyles, reactionsHoverStyles, postId}) => {

  const dispatch = useDispatch();
  const { user } = useSelector(state => state.authReducer);

  const handleReaction = (reactionType, e) => {
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

Reactions.propTypes = {
  reactionsStyles: PropTypes.string.isRequired,
  reactionsHoverStyles: PropTypes.string,
  postId: PropTypes.string.isRequired,
}