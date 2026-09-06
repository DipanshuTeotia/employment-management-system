import React from 'react'

const TaskList = () => {
  return (
    <div className='p-4 mt-4 flex items-center justify-start h-[55%] flex-nowrap gap-4 overflow-x-auto'>
      
      <div className='h-full shrink-0 w-75 bg-red-400 p-4 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h2 className='bg-red-500 px-2 w-fit rounded font-semibold'>High</h2>
            <h3 className='text-sm'>6th sep</h3>
        </div>
        <h1 className='text-2xl font-bold mt-5 flex flex-nowrap'>Task Heading</h1>
        <p className='text-lg mt-4 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, voluptas.</p>
      </div>

      <div className='h-full shrink-0 w-75 bg-green-400 p-4 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h2 className='bg-red-500 px-2 w-fit rounded font-semibold'>High</h2>
            <h3 className='text-sm'>6th sep</h3>
        </div>
        <h1 className='text-2xl font-bold mt-5 flex-nowrap'>Task Heading</h1>
        <p className='text-lg mt-4 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, voluptas.</p>
      </div>

      <div className='h-full shrink-0 w-75 bg-blue-400 p-4 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h2 className='bg-red-500 px-2 w-fit rounded font-semibold'>High</h2>
            <h3 className='text-sm'>6th sep</h3>
        </div>
        <h1 className='text-2xl font-bold mt-5 flex-nowrap'>Task Heading</h1>
        <p className='text-lg mt-4 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, voluptas.</p>
      </div>

      <div className='h-full shrink-0 w-75 bg-yellow-400 p-4 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h2 className='bg-red-500 px-2 w-fit rounded font-semibold'>High</h2>
            <h3 className='text-sm'>6th sep</h3>
        </div>
        <h1 className='text-2xl font-bold mt-5 flex-nowrap'>Task Heading</h1>
        <p className='text-lg mt-4 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, voluptas.</p>
      </div>
    
    </div>
  )
}

export default TaskList
