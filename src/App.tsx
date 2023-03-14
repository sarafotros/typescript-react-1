import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Message from "./Message";

function App() {
  const listItem = ["London", "paris", "New York", "Sydney"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  const [showBtn, setShowBtn] = useState(false);
  const handleBtn = () => {
    setShowBtn(true);
  };
  const handleClose = () => {
    setShowBtn(false)
  }
  
  return (
    <div>
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
    </div>
  );
}

export default App;
