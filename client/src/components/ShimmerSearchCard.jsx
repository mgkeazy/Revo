// components/SearchVideoShimmer.jsx
import React from 'react';

const ShimmerSearchCard = () => {
  return (
    <div className="flex w-full max-w-6xl p-4 border-b border-gray-200 animate-pulse">
      <div className="w-[400px] h-[225px] bg-gray-300 rounded-xl flex-shrink-0" />
      <div className="flex flex-col ml-6 w-full space-y-3">
        <div className="w-3/4 h-6 bg-gray-300 rounded" />
        <div className="w-1/2 h-4 bg-gray-300 rounded" />
        <div className="w-1/4 h-4 bg-gray-300 rounded" />
        <div className="w-full h-4 bg-gray-200 rounded" />
        <div className="w-5/6 h-4 bg-gray-200 rounded" />
      </div>
    </div>
  );
};

export default ShimmerSearchCard;
