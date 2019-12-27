import React from 'react';

import MiniCharts from '../components/partials/charts/miniCharts';
import MainChart from '../components/partials/charts/mainChart';
import Table from '../components/table';
const Dashboard = () => {

  return (
    <div className='dashboard'>
      <MiniCharts />
      <MainChart />
      <div className='payment-heading'>Payments</div>
      <div className='react-table'>
      <Table />
      </div>
    </div>
  )
}

export default Dashboard;