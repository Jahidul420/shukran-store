import React from "react";

const Scroll = () => {
  return (
    <div>
      <div className=" bg-orange-100 sticky overflow-y-scroll flex justify-between ">
        <div className=" text-white font-bold text-5xl space-y-32 p-10 bg-sky-500 w-3/6 h-auto">
          <h2>hello world</h2>
          <h2>hello world 1</h2>
          <h2>hello world 2</h2>
          <h2>hello world 3</h2>
          <h2>hello world 4</h2>
          <h2>hello world 5</h2>
          <h2>hello world 6</h2>
          <h2>hello world 7</h2>
          <h2>hello world 8</h2>
          <h2>hello world 9</h2>
          <h2>hello world 10</h2>
        </div>
        <div className="text-5xl font-bold text-red-400  w-3/6 h-[100vh]">
          <div className="overflow-y-scroll p-10 space-y-32 h-screen w-full bg-lime-400 fixed border-2 border-orange-500">
            <h2>hello world</h2>
            <h2>hello world 1</h2>
            <h2>hello world 2</h2>
            <h2>hello world 3</h2>
            <h2>hello world 4</h2>
            <h2>hello world 5</h2>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center h-[100vh] w-screen bg-red-300 sticky top-0">
        <h1>Hello world this is a challenge</h1>
      </div>
    </div>
  );
};

export default Scroll;
