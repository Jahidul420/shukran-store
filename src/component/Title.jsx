import React from 'react';

const Title = ({title, subTitle}) => {
  return (
    <div className="w-[55%] m-auto text-center text-5xl font-austin space-y-5">
      <h2>{title}</h2>
      <p className="font-roboto text-sm">
        {subTitle}
      </p>
    </div>
  );
}

export default Title