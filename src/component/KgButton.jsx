import React from 'react';

const KgButton = ({kg}) => {
  return (
    <button className="py-[2px] px-2 border rounded-full focus:bg-white focus:text-purple-500 duration-300 ">
      {kg} kgs
    </button>
  );
}

export default KgButton