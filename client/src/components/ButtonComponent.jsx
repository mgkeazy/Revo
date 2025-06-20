import React from 'react'

const ButtonComponent = ({name}) => {
  return (
    <div>
        <button className='m-2 px-5 py-2  bg-gray-200 border border-gray-200 rounded-lg cursor-pointer hover:bg-red-400'>
            {name}
        </button>
    </div>
  )
}

export default ButtonComponent 