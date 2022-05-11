import React from 'react'

const Interaction = () => {
  return (
    <div className='mx-4 p-1 pb-2 border-t border-border-line flex'>
        <button className='flex items-center justify-center py-2 w-1/2 hover:bg-gray-text'>
            <img src="../assets/Like.png" alt="" className='w-6 mr-1' />
            React to Post
        </button>
        <button className='w-1/2 flex items-center py-2 justify-center hover:bg-gray-text'>
            <img src="../assets/share.png" alt="" className='w-6 mr-1' />
            Share
        </button>
    </div>
  )
}

export default Interaction