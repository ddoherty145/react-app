import { Link } from 'react-router-dom';
import './POPOSSpace.css';

function POPOSSpace({ id, name, image, address, hours }) {
  return (
    <div className="POPOSSpace">
      <Link to={`/details/${id}`}>
        <img 
          src={`${process.env.PUBLIC_URL}/${image}`} 
          width="300" 
          height="300" 
          alt={name} 
        />
      </Link>
      <h1>
        <Link className="POPOSSpace-title" to={`/details/${id}`}>
          {name}
        </Link>
      </h1>
      <div className="POPOSSpace-info"> {/* ✅ FIXED class to className */}
        <div>{address}</div>
        <div className="hours"><em>{hours}</em></div> {/* Styled hours */}
      </div>
    </div>
  );
}

export default POPOSSpace;
