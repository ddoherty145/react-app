import React, { useState } from 'react';
import POPOSSpace from '../POPOSSpace/POPOSSpace';
import './POPOSList.css';
import data from '../../sfpopos-data.js'; // Use the new data file

function POPOSList() {
  const [query, setQuery] = useState('');

  const spaces = data
    .filter(({ title, address }) =>
      title.toLowerCase().includes(query.toLowerCase()) || 
      address.toLowerCase().includes(query.toLowerCase())
    )
    .map(({ id, title, address, images, hours }) => (
      <POPOSSpace
        id={id} // Uses `id` instead of index
        key={`${title}-${id}`} // Ensures unique keys
        name={title}
        address={address}
        image={images[0]} // Use the first image
        hours={hours}
      />
    ));

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          value={query}
          placeholder="Search spaces..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div className="POPOSList">
      {spaces}
    </div>
    </div>
  );
}

export default POPOSList;
