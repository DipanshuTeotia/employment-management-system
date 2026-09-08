import React from "react";

const AcceptTask = () => {
  return (
    <div className="h-full shrink-0 w-75 bg-yellow-400 p-4 rounded-xl">
      <div className="flex justify-between items-center">
        <h2 className="bg-red-500 px-2 w-fit rounded font-semibold">High</h2>
        <h3 className="text-sm">6th sep</h3>
      </div>
      <div>
        <h1 className="text-2xl font-bold mt-5 flex flex-nowrap">
          Task Heading
        </h1>
        <p className="text-lg mt-4 ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi,
          voluptas.
        </p>
      </div>
      <div className="flex justify-between mt-4">
        <button className="bg-green-500 p-1 rounded">Mark as Completed</button>
        <button className="bg-red-500 p-1 rounded">Mark as Failed</button>
      </div>
    </div>
  );
};

export default AcceptTask;
