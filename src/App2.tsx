import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import LikeBtn from "./components/LikeBtn/LikeBtn";
import ExpandableText from "./components/ExpandableText";
import ListGroup from "./components/ListGroup";
import Message from "./demo/Message";
import TextBox from "./components/TextBox";
import Form from "./components/Form";
import Count from "./components/Count";

function App2() {
  const listItem = ["London", "paris", "New York", "Sydney"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  const [showBtn, setShowBtn] = useState(false);
  const handleBtn = () => {
    setShowBtn(true);
  };
  const handleClose = () => {
    setShowBtn(false);
  };

  const clickLike = () => {
    console.log("clicked");
  };

  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const handleClick = () => {
    setGame({
      ...game,
      player: { ...game.player, name: "bob" },
    });
  };

  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom", "Olives"],
  });

  const handleAddTopping = () => {
    setPizza({
      ...pizza,
      toppings: [...pizza.toppings, "Cheese"],
    });
  };
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, titel: "Produsct1", quantity: 1 },
      { id: 2, titel: "Produsct2", quantity: 1 },
    ],
  });
  const handleCart = () => {
    setCart({
      ...cart,
      items: cart.items.map((i) =>
        i.id === 1 ? { ...i, quantity: i.quantity + 1 } : i
      ),
    });
  };

  return (
    <div>
      <Count />
      <Count />
      <Count />
      <Form></Form>
      <div>
        <h2>Shopping Basket</h2>
        <ul>
          {cart.items.map((pi, i) => (
            <li key={i}>
              {pi.quantity}: : : :{pi.titel}
            </li>
          ))}
        </ul>
        <button onClick={handleCart}>Add toCart</button>
      </div>
      <div>
        <h2>Excercis/Excercise</h2>
        <p>{game.player.name}</p>
        <button onClick={handleClick}>Change Name</button>
      </div>
      <div>
        <h2>Excercis Pizza Topping</h2>
        <ul>
          {pizza.toppings.map((pi, i) => (
            <li key={i}>{pi}</li>
          ))}
        </ul>
        <button style={{ background: "pink" }} onClick={handleAddTopping}>
          Add Topping
        </button>
      </div>
      {showBtn && (
        <Alert onClose={handleClose}>
          Hello <span>World</span>
        </Alert>
      )}
      <Button onClickHandler={handleBtn}>My Button</Button>

      <ListGroup
        items={listItem}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <LikeBtn onClicked={clickLike} />
      <div>
        <TextBox maxShow={27}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dicta
          quibusdam deserunt accusamus est quod possimus. Quae in, veritatis
          temporibus omnis possimus alias exercitationem illum quia dolores odio
          vitae consectetur ipsa accusamus voluptatem doloribus praesentium
          natus corporis fugiat, laboriosam a sint aliquam commodi totam nobis.
          Expedita ut atque esse? Repellendus ex veritatis fugit fugiat nostrum
          cupiditate rem suscipit molestiae quis magni, esse iure quae, est
          expedita ea reprehenderit beatae nobis consectetur nam! In aut
          ratione, consequuntur expedita, laudantium aliquid illum blanditiis
          distinctio, laborum neque recusandae facilis officiis ipsum enim
          corrupti labore dolore amet accusantium libero. Dolores soluta, minus
          odio eos unde incidunt praesentium placeat tempora, consequatur
          aliquid dolore, excepturi autem ipsam? Deleniti unde, fugit amet
          adipisci omnis officiis illo cum rerum eos distinctio odit quae
          placeat debitis obcaecati maiores nemo ratione, libero eius. Magni,
          est! Aut animi adipisci provident laborum itaque quo debitis ipsa
          minima laudantium! Aliquid assumenda veniam modi unde nihil dolorem
          ratione voluptate, laudantium expedita veritatis temporibus nostrum
          consequuntur ut et recusandae voluptatum atque doloremque. Ullam
          tempora quia aliquid, quidem facere blanditiis laudantium placeat
          possimus deleniti porro optio praesentium explicabo expedita nisi
          fuga. Possimus aut minus corrupti placeat ducimus accusamus fugiat
          eius, voluptatibus numquam dolorem dolores id architecto!
        </TextBox>
      </div>
      <ExpandableText maxChar={45}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis suscipit
        dolore exercitationem repellendus voluptate aliquid id quod neque.
        Facere nostrum repudiandae id labore totam placeat tenetur. Adipisci
        porro illo maiores? Dicta placeat aperiam eaque ipsam commodi? Cumque
        quidem veritatis ullam iusto maxime harum corporis minima fugit dolores.
        Quibusdam quam, quo mollitia error natus ad cumque odit saepe impedit
        esse soluta corporis perspiciatis alias placeat est sunt ut iure
        sapiente beatae totam similique. Saepe, facere accusantium. Cumque
        voluptates, consequatur, rem ut nobis nam quasi fugiat qui voluptate,
        quis suscipit. Sapiente unde id architecto itaque. Voluptatem modi
        corporis corrupti ipsum aut aliquid!
      </ExpandableText>
    </div>
  );
}

export default App2;
