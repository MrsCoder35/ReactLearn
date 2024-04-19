import React from "react";

const SandS = () => {
  return (
    <>
      <div>
        <h3>SpacingAndSizing</h3>
        <button className="bg-blue-400 text-white p-4 m-8">Tıkla</button>
        <button className="bg-blue-400 text-white px-4 ms-4">Tıkla</button>
        <button className="bg-blue-400 text-white px-8 ml-4">Tıkla</button>
        <button className="bg-blue-400 text-white px-4 py-2 mx-8">Tıkla</button>
      </div>
      <div>
        <button className="bg-green-600 text-white mx-4 px-4 py-2 border border-yellow-600 rounded-md">
            
          Tıkla
        </button>
        <button className="bg-green-600 text-white mx-4 px-4 py-2 border-[3px] border-yellow-600 rounded-[10px]">
            
          Tıkla
        </button>
        <button className="bg-green-600 text-white mx-4 px-6 py-6 w-20 h-20 rounded-full">
            
          Tıkla
        </button>
        <button className="bg-green-600 text-white mx-4 px-6 py-6 w-20 h-20 rounded-[50%]">
            
            Tıkla
          </button>
      </div>
      <div>
        <button className="bg-indigo-300 rounded-full py-2 mx-1 w-20">Tıkla</button>
        <button className="bg-indigo-300 rounded-full py-2 mx-1 w-1/2">Tıkla</button>
        <button className="bg-indigo-300 rounded-full py-2 m-3 w-[300px]">Tıkla</button>
      </div>
    </>
  );
};

export default SandS;
