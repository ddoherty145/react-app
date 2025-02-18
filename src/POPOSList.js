import React from 'react';
import POPOSSpace from './POPOSSpace';
import './POPOSSpace.css';
import data from './sfpopos-data.json';

function POPOSList() {
  const spaces = data.map(({ title, address, images, hours }) => (
    <POPOSSpace
      key={title} // Unique key for each component
      name={title}
      address={address}
      image={images[0]} // Using first image from the array
      hours={hours} // Pass hours as a prop
    />
  ));

  return <div className="POPOSList">{spaces}</div>;
}

export default POPOSList;
