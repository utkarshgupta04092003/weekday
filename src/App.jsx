import React from 'react';
import { Provider } from 'react-redux';
import jobStore from './redux/jobStore'
import Home from './pages/Home';

export default function App() {
  return (
    <Provider store={jobStore}>
      
      <Home/> 
      
    </Provider>
  );
}