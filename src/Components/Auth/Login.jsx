import React, { useState } from 'react'

const Login = ({handleLogin}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  const submitHandler=(e)=>{
    e.preventDefault();
    // console.log("email is ",{email});
    // console.log("password is ",{password});
    handleLogin(email,password);
    setEmail('');
    setPassword('');
  }
  
  return (
    <div className='h-screen w-full flex justify-center items-center'>
      <div className='border-2 border-emerald-600 rounded-2xl p-10'>
        <form 
        onSubmit={(e)=>{
            submitHandler(e);
        }}
        className='flex flex-col justify-center items-center p-4'>

            <input
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value);
            }}
            className='border-2 border-emerald-600 rounded-full p-2 outline-none bg-transparent' required type="email" placeholder='Enter your name'/>

            <input
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value);
            }}
            className='border-2 border-emerald-600 rounded-full p-2 outline-none mt-2 bg-transparent' required type="password" placeholder='Enter password'/>

            <button className='bg-emerald-600 w-full px-1 py-2 mt-2 rounded-full active:scale-95'>Log In</button>
        </form>
      </div>
    </div>
  )
}

export default Login
