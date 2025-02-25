import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import About from './components/About/About';
import POPOSList from './components/POPOSList/POPOSList.js';
import POPOSDetails from './components/POPOSDetails/POPOSDetails'; // Import POPOSDetails
import App from './components/App';
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

