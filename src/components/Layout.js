import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import RightSidebar from './RightSidebar';

export default function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const location = useLocation(); // Get current route


  return (
    <div className="flex h-screen overflow-hidden">



      {/* Sidebar */}
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />


      {/* Main Content Wrapper */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Header */}
        <Header toggleSidebar={toggleSidebar} />

        {/* Main Content Area with Scrollable Section */}
        <div className="flex-1 overflow-y-auto bg-gray-50 no-scrollbar">
          <Outlet />
        </div>
      </div>




      {/* Show RightSidebar only on Home Page */}
      {location.pathname === '/' && <RightSidebar />}

    </div>
  );
}
