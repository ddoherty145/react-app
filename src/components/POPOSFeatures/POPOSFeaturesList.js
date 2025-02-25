import React from 'react';
import POPOSFeatures from './POPOSFeatures'; // Ensure this matches your actual filename
import './POPOSFeaturesList.css'; // Ensure this matches your actual CSS filename

function POPOSFeaturesList({ features }) {
  return (
    <div className="POPOSFeaturesList">
      {features.map((feature) => (
        <POPOSFeatures key={feature} name={feature} />
      ))}
    </div>
  );
}

export default POPOSFeaturesList;

