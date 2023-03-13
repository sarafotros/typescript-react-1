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
  return (
    <div>
      <Button  onClickHandler={() => console.log("clicked")}>My Button</Button>
      <Alert>
        Hello <span>World</span>
      </Alert>
      <ListGroup
        items={listItem}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
