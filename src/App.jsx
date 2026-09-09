import React, { useContext, useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import EmployeDashboard from './Components/Dashboard/EmployeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './Utils/LocalStorage'
import { AuthContext } from './Context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);
  // console.log(authData.employees);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if(loggedInUser){
      const userData=JSON.parse(loggedInUser);
      console.log(userData);
      setUser(userData.role);

      if (userData.role == 'employee') {
        // always pull fresh employee data by email, not the cached copy
        const freshData = JSON.parse(localStorage.getItem('employee'));
        // console.log(freshData);
        const currentEmployee = freshData.find((e) => e.email === userData.data.email);
        // console.log(currentEmployee);
        setLoggedInUserData(currentEmployee);
      } else {
        setLoggedInUserData('admin');
      }
    }
  }, [])
  
  

  const handleLogin = (email,password)=>{
    if(email=='admin@me.com' && password=='123'){
      setUser('admin');
      setLoggedInUserData('admin');
      localStorage.setItem("loggedInUser",JSON.stringify({role:'admin',}));
    }
    else if(authData){
      const employee=authData.employees.find((e)=> e.email==email && e.password==password);
      if(employee){
        setUser('employee');
        localStorage.setItem("loggedInUser",JSON.stringify({role:'employee',data:employee}));
        setLoggedInUserData(employee);
      }
    }
    else{
      alert('Invalid creds');
    }
  }

  return (
    <div className='h-screen w-full bg-black text-white'>
      <>
      {!user ? <Login handleLogin={handleLogin}/> : ''}
      {user=='admin' ? <AdminDashboard changeUser={setUser}/> : (user=='employee' ? <EmployeDashboard changeUser={setUser} data={loggedInUserData}/> : null)}
      </>
    </div>
  )
}

export default App
