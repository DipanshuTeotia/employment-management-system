import React from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import FailledTask from './FailledTask'
import NewTask from './NewTask'

const TaskList = ({data}) => {
  // console.log(data.taskCounts);
  return (
    <div className='p-4 mt-4 flex items-center justify-start h-[55%] flex-nowrap gap-4 overflow-x-auto'>
      {data.tasks.map((ele,idx)=>{
        if(ele.active){
          return <AcceptTask key={idx} data={ele}/>;
        }
        if(ele.newTask){
          return <NewTask key={idx} data={ele}/>
        }
        if(ele.completed){
          return <CompleteTask key={idx} data={ele}/>
        }
        if(ele.failed){
          return <FailledTask key={idx} data={ele}/>
        }
      })}
    </div>
  )
}

export default TaskList
