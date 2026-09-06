import React from 'react'
import Header from '../others/Header'
import CreateTasks from '../others/CreateTasks'
import AllTasks from '../others/AllTasks'

const AdminDashboard = () => {
  return (
    <div>
      <Header/>
      <CreateTasks/>
      <AllTasks/>
    </div>
  )
}

export default AdminDashboard
