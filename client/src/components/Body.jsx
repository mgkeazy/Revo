import React from 'react';
import SideBar from './SideBar';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Body = () => {
  return (
    <div className="flex flex-col h-screen w-full">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar with independent scroll */}
        <div className="w-max[60px] overflow-y-auto border-r border-gray-300">
          <SideBar />
        </div>

        {/* Main content with independent scroll */}
        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Body;
