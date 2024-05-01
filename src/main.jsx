import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import jobStore from './redux/jobStore'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <Provider store={jobStore}>
    <App />
    </Provider>
  </React.StrictMode>,
)
