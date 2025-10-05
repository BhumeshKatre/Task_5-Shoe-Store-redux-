import React from 'react';
import Navbar from '../component/Navbar';
import { Outlet } from 'react-router-dom';

const ManiPageLayout = () => {
  return (
    <>
      <Navbar />
      <div className='bg-gray-200 min-h-[100vh]'>
        <Outlet />
      </div>
    </>
  );
}

export default ManiPageLayout;
