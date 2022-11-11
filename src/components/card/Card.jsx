import React, { useState } from "react";

import plus from "../../assets/img/plus.svg";
import checked from "../../assets/img/checked.svg";
import redLike from "../../assets/img/redlike.svg";

import "./card.scss";

const Card = ({ title, price, imageUrl, onPlus, onFavorite }) => {
  const [isAdded, setIsAdded] = useState(false);

  const onClickPlus = () => {
    onPlus({ title, price, imageUrl });
    setIsAdded(!isAdded);
  };
  return (
    <div className="card">
      <div className="favourite">
        <img className="like" width={32} height={32} src={redLike} alt="Like" />
      </div>
      <img width={133} height={120} src={imageUrl} alt="sneaker" />
      <p>{title}</p>
      <div className="cardBottom">
        <div className="cardInfo">
          <p>Price:</p>
          <b>{price}</b>
        </div>
        <button>
          <img
            src={isAdded ? checked : plus}
            alt="plus"
            onClick={onClickPlus}
          />
        </button>
      </div>
    </div>
  );
};

export default Card;
