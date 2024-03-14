import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [items, setItems] = useState([])
  const [price, setPrice] = useState(0)
  
  const addItem = (newItem) => {setItems([...items, newItem]); setPrice(price + newItem.price)}
   return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      {bakeryData.map((item, index) => (
        <div key={index}>
          <p>{item.name}</p>
          <img src={item.image}/>
          <p>{item.price}</p>
          <button onClick={() => addItem(item)}>Add {item.name}
          </button>
        </div>
      ))}
      
      <div>
        <h2>Cart</h2>
        {items.map((item, index) => (
          <div key={index}>
            {item.name}
            ${item.price}
            </div>
        ))}
      </div>
      <p>Total Price: ${price}</p>
    </div>
  );
}

export default App;
