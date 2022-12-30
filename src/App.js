import './App.css';


const PhoneData = [
  {name : "iphonex", price:"1000000", discount:"50"},
  {name : "iphoney", price:"1000000", discount:"30"},
  {name : "iphonez", price:"1000000", discount:"20"},
  {name : "iphonea", price:"1000000", discount:"100"},
];
function Products ({price, name , discount = 0}){
  return (
    <diV>
      <h2>{name}</h2>
      <p>
        <s>Rp. {price}</s> ({discount}%)
      </p>
      <p><b>Rp. {parseInt(price)-parseInt(discount)*(parseInt(discount)/100)}</b></p>
      <hr></hr>
    </diV>
  );
}
function App() {
  return (
    <div className="App">
      {/* looping data array */}
      {PhoneData.map((phone,id) => (
        <Products key={id} name={phone.name} price={phone.price} discount={phone.discount}></Products>
      ))}
      
      
      {/* <Products name="Iphone X" price="1000000" discount="50"></Products>
      <Products name="oppo" price="100000" discount="30"></Products> */}
    </div>
  );
}

export default App;