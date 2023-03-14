import React, { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import style from "./LikeBtn.module.css";

interface Prpos {
  onClicked: () => void;
}

const LikeBtn = ({ onClicked }: Prpos) => {
  const [status, setStatus] = useState(false);

  const toggle = () => {
    setStatus(!status);
    onClicked();
  };

  if (status) return <AiFillHeart className={style.btn} onClick={toggle} />;

  return <AiFillHeart className={style.btn1} onClick={toggle} />;
};

export default LikeBtn;
