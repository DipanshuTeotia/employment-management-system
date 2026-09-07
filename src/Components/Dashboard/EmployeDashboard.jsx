import React from 'react'
import Header from '../others/Header'
import TaskListNumbers from '../others/TaskListNumbers'
import TaskList from '../Tasklist/TaskList'

const EmployeDashboard = ({data}) => {
  return (
    <div className='h-screen w-full'> 
      <Header data={data}/>
      <TaskListNumbers data={data}/>
      <TaskList data={data}/>
    </div>
  )
}

export default EmployeDashboard
