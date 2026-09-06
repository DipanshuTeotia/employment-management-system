import React from 'react'

const AllTasks = () => {
  return (
    <div className='bg-[#383838] m-4 p-5 rounded-xl flex flex-col gap-2 h-40 overflow-auto'>
      <div className='bg-red-400 flex justify-between p-3 rounded-xl'>
        <h2>Name</h2>
        <h3>Task</h3>
        <h4>Status</h4>
      </div>
      <div className='bg-green-400 flex justify-between p-3 rounded-xl'>
        <h2>Name</h2>
        <h3>Task</h3>
        <h4>Status</h4>
      </div>
      <div className='bg-blue-400 flex justify-between p-3 rounded-xl'>
        <h2>Name</h2>
        <h3>Task</h3>
        <h4>Status</h4>
      </div>
      <div className='bg-yellow-400 flex justify-between p-3 rounded-xl'>
        <h2>Name</h2>
        <h3>Task</h3>
        <h4>Status</h4>
      </div>
    </div>
  )
}

export default AllTasks
