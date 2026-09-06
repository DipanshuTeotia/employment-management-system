import React from 'react'

const CreateTasks = () => {
  return (
    <div className='m-4 bg-[#383838] flex justify-between p-5 text-gray-300 rounded-xl'>
      <div className='flex flex-col justify-start w-[45%] gap-4'>
        <div>
            <h1>Task Title</h1>
            <input className='border w-full rounded px-2 py-1 outline-none' type="text" placeholder='Make a UI design' />
        </div>
        <div>
            <h1>Date</h1>
            <input className='border w-full rounded px-2 py-1 outline-none' type="date" />
        </div>
        <div>
            <h1>Assign to</h1>
            <input className='border w-full rounded px-2 py-1 outline-none' type="text" placeholder='employee name' />
        </div>
        <div>
            <h1>Category</h1>
            <input className='border w-full rounded px-2 py-1 outline-none' type="text" placeholder='design,dev,etc' />
        </div>
      </div>

      <div className='w-[45%] flex flex-col justify-start'>
        <h1>Description</h1>
        <textarea className='w-full border rounded-xl outline-none' rows={10} name="" id=""></textarea>
        <button className='bg-green-500 text-white active:scale-95 py-2 rounded-xl mt-3'>Create Task</button>
      </div>
    </div>
  )
}

export default CreateTasks
