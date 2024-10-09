import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import CourseContextProvider from './Components/CourseContext/CourseContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<CourseContextProvider>
<Router>
<React.StrictMode>
    <App />
  </React.StrictMode>
</Router>
</CourseContextProvider>
);

