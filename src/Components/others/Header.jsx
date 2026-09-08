import React from 'react'

const Header = ({data}) => {
  // console.log(data)
  return (
    <div>
      <div className='flex justify-between items-center p-4'>
        <h1 className='text-3xl font-bold'>Hello,<br/> <span>username</span></h1>
        <button className='bg-red-500 p-1 rounded outline-none'>Log out</button>
      </div>
    </div>
  )
}

export default Header
