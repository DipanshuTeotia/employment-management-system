import React, { useContext, useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import EmployeDashboard from './Components/Dashboard/EmployeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './Utils/LocalStorage'
import { AuthContext } from './Context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext);
  // console.log(authData.employees[0]);

  // useEffect(()=>{
  //   setLocalStorage();
  //   getLocalStorage();
  // })

  useEffect(() => {
    if(authData){
      const loggedInUser=localStorage.getItem("loggedInUser");
      if(loggedInUser){
        setUser(loggedInUser.role);
      }
    }
  }, [authData])
  

  const handleLogin = (email,password)=>{
    if(email=='admin@me.com' && password=='123'){
      setUser('admin');
      localStorage.setItem("loggedInUser",JSON.stringify({role:'admin'}));
    }
    else if(authData && authData.employees.find((e)=> e.email==email && e.password==password)){
      setUser('employee');
      localStorage.setItem("loggedInUser",JSON.stringify({role:'employee'}));
    }
    else{
      alert('Invalid creds');
    }
  }

  return (
    <div className='h-screen w-full bg-black text-white'>
      <>
      {!user ? <Login handleLogin={handleLogin}/> : ''}
      {user=='admin' ? <AdminDashboard/> : <EmployeDashboard/>}
      </>
    </div>
  )
}

export default App
