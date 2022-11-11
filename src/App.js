import "./App.scss";

import vector from "./assets/img/vector.svg";

import Card from "./components/card/Card";
import Header from "./components/Header";
import Overlay from "./components/Overlay";
import axios from "axios";

import { useState, useEffect } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [searchValue, setSearchValue] = useState([]);
  useEffect(() => {
    axios
      .get("https://636e0cc9b567eed48ad14f31.mockapi.io/items")
      .then((res) => {
        setItems(res.data);
      });
    axios
      .get("https://636e0cc9b567eed48ad14f31.mockapi.io/cart")
      .then((res) => {
        setCartItems(res.data);
      });
  }, []);

  console.log(cartItems);

  const onChangeInput = (event) => {
    setSearchValue(event.target.value);
  };

  const onAddCart = (obj) => {
    axios.post("https://636e0cc9b567eed48ad14f31.mockapi.io/cart", obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveCart = (id) => {
    axios.delete(`https://636e0cc9b567eed48ad14f31.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <div className="wrapper">
      {cartOpened ? (
        <Overlay
          items={cartItems}
          onRemove={onRemoveCart}
          onCloseCart={() => setCartOpened(false)}
        />
      ) : null}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content">
        <div className="contentTop">
          <h1>
            {searchValue ? `Поиск по запросу: ${searchValue}` : "All sneakers"}
          </h1>
          <div className="searchBlock">
            <img src={vector} alt="vector" />
            <input
              onChange={onChangeInput}
              value={searchValue}
              placeholder="Search"
            />
          </div>
        </div>
        <div className="cardList">
          {items
            .filter((item) => item.name.toLowerCase().includes(searchValue))
            .map((item, index) => (
              <Card
                key={index}
                title={item.name}
                price={item.price}
                imageUrl={item.imageUrl}
                onPlus={(obj) => onAddCart(obj)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
