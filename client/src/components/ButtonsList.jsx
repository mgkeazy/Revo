import React from 'react'
import ButtonComponent from './ButtonComponent'

const ButtonsList = () => {
  const buttonNames = [
    'All', 'Music', 'Live', 'Gaming', 'News',
    'Sports', 'Movies', 'Comedy', 'Technology', 'Education',
    'Fashion', 'Travel', 'Food', 'Science', 'Documentary'
  ];

  return (
    <div className="flex overflow-x-scroll w-auto whitespace-nowrap">
      {buttonNames.map((name, ind) => (
        <ButtonComponent name={name} key={ind} />
      ))}
    </div>
  );
};

export default ButtonsList;
