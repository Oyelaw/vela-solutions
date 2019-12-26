import React from 'react';

import MiniCharts from '../components/partials/charts/miniCharts';
import MainChart from '../components/partials/charts/mainChart';

const Dashboard = () => {

  return (
    <div className='dashboard'>
      <MiniCharts />
      <MainChart />
    </div>
  )
}

export default Dashboard;