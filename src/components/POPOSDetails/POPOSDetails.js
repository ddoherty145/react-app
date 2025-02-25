import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../sfpopos-data.js'; 
import POPOSFeatureList from '../POPOSFeatures/POPOSFeaturesList';
import './POPOSDetails.css';

function POPOSDetails() {
  const { id } = useParams();
  const space = data.find(space => space.id === parseInt(id, 10)); // Ensure ID is a number

  if (!space) {
    return <h2>Location not found</h2>; // Handle invalid IDs
  }

  const { images, title, desc, hours, features, geo } = space;

  return (
    <div className="POPOSDetails">
      <div className="POPOSDetails-image">
        <img src={`${process.env.PUBLIC_URL}/${images}`} alt={title} />
      </div>
      <div className="POPOSDetails-info">
        <h1 className="POPOSDetails-title">{title}</h1>
        <p className="POPOSDetails-desc">{desc}</p>
        <p className="POPOSDetails-hours"><strong>Hours:</strong> {hours}</p>

        {/* ✅ Display Features as Icons Instead of Text */}
        <POPOSFeatureList features={features} />

        <p className="POPOSDetails-geo"><strong>Location:</strong> {geo.lat}, {geo.lon}</p>
      </div>
    </div>
  );
}

export default POPOSDetails;
