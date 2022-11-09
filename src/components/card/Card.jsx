import React from "react";

import plus from "../../assets/img/plus.svg";
import sneaker1 from "../../assets/sneakers/image5.jpg";
import redLike from "../../assets/img/redlike.svg";

import "./card.scss";

const Card = () => {
  return (
    <div className="card">
      <div className="favourite">
        <img className="like" width={32} height={32} src={redLike} alt="Like" />
      </div>
      <img width={133} height={120} src={sneaker1} alt="sneaker" />
      <p>Men's Sneaker Nike Blazer Mid Suede</p>
      <div className="cardBottom">
        <div className="cardInfo">
          <p>Price:</p>
          <b>12 999 rub</b>
        </div>
        <button>
          <img src={plus} alt="plus" />
        </button>
      </div>
    </div>
  );
};

export default Card;
