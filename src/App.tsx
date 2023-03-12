import { useState } from 'react';
import ListGroup from './components/ListGroup';
import Message from './Message';


function App (){
  const listItem = ["London", "paris", "New York", "Sydney"];
  const handleSelectItem = (item: string) => {
    console.log(item)
  }
  return <div><ListGroup items={listItem} heading="Cities" onSelectItem={handleSelectItem}/></div>
}

export default App
