import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import UserProvider from './context/userProvider';
import ExerciseProvider from './context/exerciseProvider';
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ExerciseProvider>
      <UserProvider>
        <App />
      </UserProvider>
  </ExerciseProvider>
</BrowserRouter>
)
