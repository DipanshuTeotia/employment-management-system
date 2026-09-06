import React from 'react'
import Login from './Components/Auth/Login'
import EmployeDashboard from './Components/Dashboard/EmployeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'

const App = () => {
  return (
    <div className='h-screen w-full bg-black text-white'>
      <>
      {/* <Login/> */}
      {/* <EmployeDashboard/> */}
      <AdminDashboard/>
      </>
    </div>
  )
}

export default App
