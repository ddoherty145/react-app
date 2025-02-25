import { Link } from 'react-router-dom';

function POPOSSpace({id, name, image, address, hours }) {
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
        <h1><Link to={`/details/${id}`}>{name}</Link></h1>
        <div>{address}</div>
        <div className="hours"><em>{hours}</em></div> {/* Styled hours */}
      </div>

    );
  }
  
  export default POPOSSpace;
  