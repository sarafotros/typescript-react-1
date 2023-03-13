import React from 'react';

interface Props {
    children: string;
    color?:"primary" | "success" | "secondary";
    onClickHandler: () => void;
}
const Button = ({children, onClickHandler, color = "primary"}: Props) => {
  return (
    <button onClick={onClickHandler} className={"btn btn-"+ color}>{children}</button>
  )
}

export default Button