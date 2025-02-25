import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import About from './About/About';
import POPOSList from '../POPOSList';
import POPOSDetails from './POPOSDetails/POPOSDetails'; // Import POPOSDetails
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<POPOSList />} /> {/* Default page */}
          <Route path="about" element={<About />} />
          <Route path="details/:id" element={<POPOSDetails />} /> {/* Details route */}
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

