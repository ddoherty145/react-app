import POPOSSpace from "./POPOSSpace";

function POPOSList() {
  return (
    <div className="POPOSList">
        <POPOSSpace 
        name = "50 California Street"
        addrees = "50 California St."
        image = "images/50-california-st.jpg"
        />
        <POPOSSpace 
        name = "100 Pine Street"
        addrees = "100 Pine St."
        image = "images/100-pine.jpg"
        />
        <POPOSSpace
        name = "101 California Street"
        addrees = "101 California St."
        image = "images/101-california.jpg"
        />
        <POPOSSpace
        name = "343 Sansome Roof Garden"
        address = "343 Sansome St."
        image = "images/343-sansome-roof-garden.jpg"
        />
        <POPOSSpace
        name = "525 Market Street Plaza"
        address = "525 Market St."
        image = "images/525-market-street-plaza.jpg"
         />
        <POPOSSpace
        name = "Citigroup Center"
        address = "1 Sansome St."
        image = "images/citigroup-center.jpg"
        />
    </div>
  );
}

export default POPOSList;