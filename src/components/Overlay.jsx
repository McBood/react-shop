import React from "react";

import sneaker1 from "../assets/sneakers/image5.jpg";
import remove from "../assets/img/otmena.svg";

const Overlay = ({ onCloseCart, items = [], onRemove }) => {
  return (
    <div className="overlay">
      <div className="rightSide">
        <div className="rightTopSide">
          <h2>Korzina</h2>
          <div onClick={onCloseCart}>
            <img className="removeBtn" src={remove} alt="remove" />
          </div>
        </div>
        <div className="items">
          {items.map((obj) => (
            <div className="cartItem">
              <img
                className="cardItemPhoto"
                width={70}
                height={70}
                src={obj.imageUrl}
                alt="sneaker"
              />
              <div className="cartItemInfo">
                <p>{obj.title}</p>
                <b>{obj.price}</b>
              </div>
              <img
                className="removeBtn"
                onClick={() => onRemove(obj.id)}
                src={remove}
                alt="remove"
              />
            </div>
          ))}
        </div>
        <ul className="cartDown">
          <li>
            <span>Итого:</span>
            <div></div>
            <b>21 498 руб. </b>
          </li>
          <li>
            <span> Налог 5%:</span>
            <div></div>
            <b>1074 руб.</b>
          </li>
        </ul>
        <button>Оформить заказ</button>
      </div>
    </div>
  );
};

export default Overlay;
