import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Pageone from './Pageone'
import Pagetwo from './Pagetwo'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/pageone' element={<Pageone />} />
      <Route path='/pagetwo' element={<Pagetwo />} />
    </Routes>
  </Router>
);

