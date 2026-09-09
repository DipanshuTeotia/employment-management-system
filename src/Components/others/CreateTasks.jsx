import React, { useState } from 'react'

const CreateTasks = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [date, setDate] = useState('');
  const [assignTo, setAssignTo] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const submitHandler = (e)=>{
    e.preventDefault();
    const task ={taskTitle,description,date,category,active:false,newTask:true,competed:false,failed:false};

    const data = JSON.parse(localStorage.getItem('employee'));
    // console.log(data);
    data.forEach((ele)=>{
      if(assignTo==ele.firstName){
        ele.tasks.push(task);
      }
    })
    localStorage.removeItem('employee');
    localStorage.setItem('employee',JSON.stringify(data));
    console.log(data);
    console.log(JSON.parse(localStorage.getItem('employee')));

    setTaskTitle('');
    setDate('');
    setAssignTo('');
    setCategory('');
    setDescription('');
  }
  return (
    <div className='m-4 bg-[#383838] flex justify-between p-5 text-gray-300 rounded-xl'>
      <form
      onSubmit={(e)=>{
        submitHandler(e);
      }}
      className='w-full flex justify-between'>
        <div className='w-1/2 flex flex-col justify-between'>
          <div>
            <h2>Task Title</h2>
            <input
            value={taskTitle}
            onChange={(e)=>{
              setTaskTitle(e.target.value);
            }}
            className='border-2 w-[90%] p-1 rounded-xl outline-none' type="text" placeholder='Enter Task Title' />
          </div>
          <div>
            <h2>Date</h2>
            <input 
            value={date}
            onChange={(e)=>{
              setDate(e.target.value);
            }}
            className='border-2 w-[90%] p-1 rounded-xl outline-none' type="date" />
          </div>
          <div>
            <h2>Assign to</h2>
            <input 
            value={assignTo}
            onChange={(e)=>{
              setAssignTo(e.target.value);
            }}
            className='border-2 w-[90%] p-1 rounded-xl outline-none' type="text" placeholder='Employee name' />
          </div>
          <div>
            <h2>Category</h2>
            <input 
            value={category}
            onChange={(e)=>{
              setCategory(e.target.value);
            }}
            className='border-2 w-[90%] p-1 rounded-xl outline-none' type="text" placeholder='Design,Dev,etc' />
          </div>
        </div>
        <div className='w-1/2 flex flex-col'>
            <h2>Description</h2>
            <textarea name="" id="" rows={10} 
            value={description}
            onChange={(e)=>{
              setDescription(e.target.value);
            }}
            className='border-2 rounded-xl outline-none p-1'></textarea>
            <button className='bg-green-500 text-white mt-2 py-1 rounded-xl'>Create Task</button>
        </div>
      </form>
    </div>
  )
}

export default CreateTasks
