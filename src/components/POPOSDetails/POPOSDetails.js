import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../sfpopos-data.json';

function POPOSDetails() {
  const { id } = useParams();
  const space = data[Number(id)]; // Convert id to number

  if (!space) {
    return <h2>Location not found</h2>; // Handle invalid IDs
  }

  const { images, title, desc, hours, features, geo } = space;

  return (
    <div>
      <div>
        <img src={`${process.env.PUBLIC_URL}/${images}`} alt={title} />
      </div>
      <div>
        <h1>{title}</h1>
        <p>{desc}</p>
        <p><strong>Hours:</strong> {hours}</p>
        <p><strong>Features:</strong> {features.join(', ')}</p>
        <p><strong>Location:</strong> {geo.lat}, {geo.lon}</p>
      </div>
    </div>
  );
}

export default POPOSDetails;
