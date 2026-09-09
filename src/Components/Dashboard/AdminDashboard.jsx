import React from 'react'
import Header from '../others/Header'
import CreateTasks from '../others/CreateTasks'
import AllTasks from '../others/AllTasks'

const AdminDashboard = (props) => {
  // console.log(props)
  return (
    <div>
      <Header changeUser={props.changeUser}/>
      <CreateTasks/>
      <AllTasks/>
    </div>
  )
}

export default AdminDashboard
