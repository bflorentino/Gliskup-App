import React from 'react'
import { Portal } from 'react-portal';
import ReactionList from './ReactionList';
import ReactionsMenu from './ReactionsMenu';

const PostStatisticsWindow = ({setStatsWindowOpen}) => {

    return(
      <Portal node={document && document.getElementById("portal")}>
          <div className='bg-white flex flex-col mobile:w-[90%] lg:w-[40%] rounded-lg shadow-xl'>
            <ReactionsMenu setStatsWindowOpen={setStatsWindowOpen} />
            <div className='h-[400px] overflow-auto'>
              <ReactionList />
            </div>
          </div> 
      </Portal>
    )
  }
export default PostStatisticsWindow