import React, { useState } from "react";

const AddBasket = () => {
  const [basket, setBasket] = useState({
    title: "Card",
    amount: 0,
  });

  const handleAddToCart = () => {
    // basket.amount = 1
    // setBasket(basket)
    console.log(basket.amount);
    setBasket({ ...basket, amount: basket.amount+1 });
  };
  return (
    <div>
      <p>Total items: {basket.amount} {basket.title}</p>
      <button onClick={handleAddToCart}>Add to Basket</button>
    </div>
  );
};

export default AddBasket;
