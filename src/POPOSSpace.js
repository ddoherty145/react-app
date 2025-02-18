function POPOSSpace({ name, image, address, hours }) {
    return (
      <div className="POPOSSpace">
        <img 
          src={`${process.env.PUBLIC_URL}/${image}`} 
          width="300" 
          height="300" 
          alt={name} 
        />
        <h1>{name}</h1>
        <div>{address}</div>
        <div className="hours"><em>{hours}</em></div> {/* Styled hours */}
      </div>
    );
  }
  
  export default POPOSSpace;
  