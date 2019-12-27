import React from 'react';
import { render } from 'react-dom';

import MainLayout from './layouts/mainLayout'
import Dashboard from './pages/dashboard'

const rootElement = document.getElementById('react-app');

const App = () => (
  <MainLayout>
    <div className="body">
      <Dashboard />
    </div>
  </MainLayout>
)

render(<App />, rootElement);