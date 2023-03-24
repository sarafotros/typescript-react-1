import React, { useEffect, useState } from "react";
import AddBasket from "./demo/AddBasket";
import Alert from "./demo/Alert";
import ButtonDemo from "./demo/ButtonDemo";
import Cart from "./demo/Cart";
import ListGroup from "./demo/ListGroup";
import Message from "./demo/Message";
import NavBar from "./demo/NavBar";
import ProductList from "./demo/ProductList";

const App = () => {
  const listItem = ["Card", "Mug", "Chocklate", "Alcohol"];
  const factoies = ["Guernsey", "Arena", "DPS", "Tamworth"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  const [cartItems, setCartItems] = useState(listItem);

  return (
    <div>
      Demo App
      {/* <Message text={"text1"}/>
      <Message text={"text2"}/> */}

      {/* <Alert onClose={()=>console.log("alert clicked")}>
        Alert <span>Demo</span>
      </Alert> */}

      {/* <ProductList heading="List 1" items={listItem}/>
      <ProductList heading="List 2" items={factoies}/> */}

      {/* <ListGroup heading="Products:" items={listItem} /> 
      <ListGroup heading="Factories:" items={factoies} />  */}
  
      {/* <AddBasket/> */}

      {/* <NavBar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} /> */}
    </div>
  );
};

export default App;
