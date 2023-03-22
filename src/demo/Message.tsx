import React from "react";

interface Props {
  text: string;
}

const Message = ({text}: Props) => {
  return (
    //JSX JavaScript XML
    <>
      <h1>Hello World</h1>

      <a href="https://babeljs.io/repl">Try JSX</a>

      <h3>{text}</h3>
    </>
  );
}

export default Message;
