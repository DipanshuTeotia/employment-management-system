import React from 'react'
import Header from '../others/Header'
import TaskListNumbers from '../others/TaskListNumbers'
import TaskList from '../Tasklist/TaskList'

const EmployeDashboard = (props) => {
  console.log(props);
  return (
    <div className='h-screen w-full'> 
      <Header changeUser={props.changeUser} data={props.data}/>
      <TaskListNumbers data={props.data}/>
      <TaskList data={props.data}/>
    </div>
  )
}

export default EmployeDashboard
