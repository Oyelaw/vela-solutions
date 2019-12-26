import React from 'react';
import { render } from 'react-dom';

import MainLayout from './layouts/mainLayout'


const rootElement = document.getElementById('react-app');

const App = () => (
  <MainLayout>
    <h1>Hello APP</h1>
  </MainLayout>
)

render(<App />, rootElement);