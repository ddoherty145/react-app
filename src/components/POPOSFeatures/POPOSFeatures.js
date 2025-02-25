import React from 'react';
import './POPOSFeatures.css';

function getFeature(str) {
  switch(str) {
    case 'outdoors': return '🌲';
    case 'coffee': return '☕️';
    case 'art': return '🖼';
    case 'toilet': return '🚽';
    case 'power': return '🔌';
    default: return '❓';
  }
}

function POPOSFeature({ name }) {
  return <div className="POPOSFeature">{getFeature(name)}</div>;
}

export default POPOSFeature;
