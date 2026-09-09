import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider'

const AllTasks = () => {
  const authData=useContext(AuthContext);
  // console.log(authData.employees);
  return (
    <div className='bg-[#383838] m-4 p-5 rounded-xl flex flex-col gap-2 h-40 overflow-auto'>
      <div className='bg-blue-400 flex justify-between p-3 rounded-xl'>
        <h2 className='w-1/5 font-bold'>EmployeeName</h2>
        <h3 className='w-1/5 font-bold'>NewTask</h3>
        <h4 className='w-1/5 font-bold'>ActiveTask</h4>
        <h5 className='w-1/5 font-bold'>Completed</h5>
        <h6 className='w-1/5 font-bold'>Failed</h6>
      </div>  

      <div className='flex justify-between flex-col gap-2 overflow-auto'>
        {authData.employees.map((ele,idx)=>{
          return  <div key={idx} className='bg-transparent border-2 border-emerald-500 flex justify-between p-3 rounded-xl'>
                    <h2 className='w-1/5 font-medium'>{ele.firstName}</h2>
                    <h3 className='w-1/5 font-medium text-blue-600'>{ele.taskCounts.newTask}</h3>
                    <h4 className='w-1/5 font-medium text-yellow-600'>{ele.taskCounts.active}</h4>
                    <h5 className='w-1/5 font-medium text-green-600'>{ele.taskCounts.completed}</h5>
                    <h6 className='w-1/5 font-medium text-red-600'>{ele.taskCounts.failed}</h6>
                  </div>   
        })}
      </div>

      
    </div>
  )
}

export default AllTasks
