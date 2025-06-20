import { useState } from 'react'
import Header from './components/Header'
import Body from './components/Body'
import { Provider } from "react-redux"
import store from './utils/store'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainContainer from './components/MainContainer'
import WatchPage from './components/WatchPage'
import Results from './components/results'

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children:[
      {
        path:"/",
        element:<MainContainer/>
      },
      {
        path:"watch",
        element:<WatchPage/>
      },{
        path:"results",
        element:<Results/>
      }
    ]
  }
])

function App() { 
  return (
  <Provider store={store}>
    {/* <div className='flex flex-col h-full  w-screen overflow-x-hidden'> */}
      {/* <Header/> */}
      <RouterProvider router={appRouter}>
        {/* <Body/> */}
      </RouterProvider>
    {/* </div> */}
  </Provider>
  )
}

export default App
