import React from 'react'
import ButtonsList from './ButtonsList'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
    <div className="flex-1 overflow-y-auto">
      <ButtonsList />
      <VideoContainer />
    </div>
  )
}

export default MainContainer
