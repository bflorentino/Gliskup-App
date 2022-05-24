import React from 'react'
import { Portal } from 'react-portal';
import { useSelector } from 'react-redux';
import ReactionList from './ReactionList';
import ReactionsMenu from './ReactionsMenu';

const PostStatisticsWindow = () => {

  const { reactionsToDisplay } = useSelector(state => state.postStatsWindow);

    return(
      <Portal node={document && document.getElementById("portal")}>
          <div className='bg-white flex flex-col mobile:w-[90%] lg:w-[40%] rounded-lg shadow-xl'>
            <ReactionsMenu reactions={reactionsToDisplay} />
            <div className='h-[400px] overflow-auto'>
              <ReactionList reactions={reactionsToDisplay} />
            </div>
          </div> 
      </Portal>
    )
  }
export default PostStatisticsWindow