// TODO: Fill in the Advertisement component below to include the three string fields `companyName`, `productDescription` and `price`.

//interface  created to define the props that
// will be passed to the Advertisement component

interface AdvertisementProps {
  companyName: string;
  productDescription: string;
  price: string;
}


//create a function called Advertisement that takes in the props of type AdvertisementProps
function Advertisement({ companyName, productDescription, price }: AdvertisementProps) {
  return (
    <div className="advertisement"  >
      <h1>Company: {companyName}</h1>
      <h2>Product: {productDescription}</h2>
      <h3>Price: ${price}</h3>
    </div>
  );
}

export default Advertisement;
