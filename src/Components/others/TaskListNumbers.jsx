import React from "react";

const TaskListNumbers = () => {
  return (
    <div className="flex justify-between gap-5 p-4 overflow-x-auto flex-nowrap">
      <div className="w-[45%] bg-blue-400 rounded-xl text-xl p-3 font-bold mt-2">
        <h3>0</h3>
        <h4 className="whitespace-nowrap">New Tasks</h4>
      </div>
      <div className="w-[45%] bg-green-400 rounded-xl text-xl p-3 font-bold mt-2">
        <h3>0</h3>
        <h4 className="whitespace-nowrap">Completed Tasks</h4>
      </div>
      <div className="w-[45%] bg-yellow-400 rounded-xl text-xl p-3 font-bold mt-2">
        <h3>0</h3>
        <h4 className="whitespace-nowrap">Accepted Tasks</h4>
      </div>
      <div className="w-[45%] bg-red-400 rounded-xl text-xl p-3 font-bold mt-2">
        <h3>0</h3>
        <h4 className="whitespace-nowrap">Failed Tasks</h4>
      </div>
    </div>
  );
};

export default TaskListNumbers;
