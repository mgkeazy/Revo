import React ,{useEffect} from 'react';
import SideBar from './SideBar';
import MainContainer from './MainContainer';
import { Outlet } from 'react-router-dom';

const Body = () => {
  return (
    <div className="flex h-full w-full">
      <SideBar />          {/* fixed width */}
      <Outlet />         {/* this renders MainContainer or WatchPage */}
    </div>
  );
};


export default Body;
