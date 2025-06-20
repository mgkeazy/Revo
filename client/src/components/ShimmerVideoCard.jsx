import React from 'react'

const ShimmerVideoCard = () => {
  return (
    <div className="p-2 w-full sm:w-[400px] m-3 shadow-2xl">
      <div className='w-full aspect-video bg-gray-300 rounded-xl'></div>

      <div className="flex mt-3">

        <div className='h-10 w-10 rounded-full object-cover bg-gray-300'></div>

        <div className="ml-3 flex flex-col gap-2 w-full">
          <div className="h-4 bg-gray-300 rounded w-3/4" />
          <div className="h-3 bg-gray-300 rounded w-1/2" />
          <div className="h-3 bg-gray-300 rounded w-1/3" />
        </div>

      </div>
    </div>
  )
}

export default ShimmerVideoCard