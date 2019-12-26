import React from 'react';
import { render } from 'react-dom';

import MainLayout from './layouts/mainLayout'


const rootElement = document.getElementById('react-app');

const App = () => (
  <MainLayout>
  </MainLayout>
)

render(<App />, rootElement);