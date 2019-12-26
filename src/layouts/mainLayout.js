import React from 'react';

import Header from '../components/partials/header';
import Sidebar from '../components/partials/sidebar';

const MainLayout = ({ children }) => {
  return (
    <div className='wrapper'>
      <Header />
      <div className='side-and-body'>
        <Sidebar />
        {children}
      </div>
    </div>
  )
}

export default MainLayout;