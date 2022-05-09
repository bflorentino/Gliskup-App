import React from 'react'
import { useSelector } from 'react-redux'

const Post = () => {
    
    const {profilePic, user} = useSelector(state => state.authReducer);

  return (
    <section className='bg-white rounded-lg w-3/4 mt-4 h-[450px]'>
        <div className='flex flex-row items-center mt-2'>
        <img src={profilePic} alt="" className='w-10 rounded-full ml-8' />
        <span className='font-bold font-ubuntu'>{user} </span>
        </div>
        <p className='mt-4 ml-8 font-ubuntu text-[15px]'>Netflix ha estado cayendo constantemente</p>
        <img src="../assets/caida netflix.jpg" alt="" className='h-[300px] ml-8' />
    </section>
  )
}

export default Post