import React from 'react'

const CompleteTask = ({data}) => {
  return (
   <div className="h-full shrink-0 w-75 bg-green-400 p-4 rounded-xl">
      <div className="flex justify-between items-center">
        <h2 className="bg-red-500 px-2 w-fit rounded font-semibold">{data.category}</h2>
        <h3 className="text-sm">{data.taskDate}</h3>
      </div>
      <div>
        <h1 className="text-2xl font-bold mt-5 flex flex-nowrap">
          {data.taskTitle}
        </h1>
        <p className="text-lg mt-4 ">
          {data.taskDescription}
        </p>
      </div>
      <div className="flex justify-between mt-4">
        <button className="bg-green-500 p-1 rounded w-full">Complete</button>
      </div>
    </div>
  )
}

export default CompleteTask
