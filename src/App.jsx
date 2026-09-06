import React from 'react'
import Login from './Components/Auth/Login'
import EmployeDashboard from './Components/Dashboard/EmployeDashboard'

const App = () => {
  return (
    <div className='h-screen w-full bg-black text-white'>
      <>
      {/* <Login/> */}
      <EmployeDashboard/>
      </>
    </div>
  )
}

export default App
