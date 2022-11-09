import "./App.scss";
import logo from "./assets/img/logo.svg";
import like from "./assets/img/like.svg";
import shop from "./assets/img/shop.svg";
import profile from "./assets/img/profile.svg";
import Card from "./components/card/Card";
import vector from "./assets/img/vector.svg";
import sneaker1 from "./assets/sneakers/image5.jpg";
import remove from "./assets/img/otmena.svg";

function App() {
  return (
    <div className="wrapper">
      <div className="overlay">
        <div className="rightSide">
          <h2>Korzina</h2>
          <div className="items">
            <div className="cartItem">
              <img
                className="cardItemPhoto"
                width={70}
                height={70}
                src={sneaker1}
                alt="sneaker"
              />
              <div className="cartItemInfo">
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img className="removeBtn" src={remove} alt="remove" />
            </div>
            <div className="cartItem">
              <img
                className="cardItemPhoto"
                width={70}
                height={70}
                src={sneaker1}
                alt="sneaker"
              />
              <div className="cartItemInfo">
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img className="removeBtn" src={remove} alt="remove" />
            </div>
            <div className="cartItem">
              <img
                className="cardItemPhoto"
                width={70}
                height={70}
                src={sneaker1}
                alt="sneaker"
              />
              <div className="cartItemInfo">
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img className="removeBtn" src={remove} alt="remove" />
            </div>
            <div className="cartItem">
              <img
                className="cardItemPhoto"
                width={70}
                height={70}
                src={sneaker1}
                alt="sneaker"
              />
              <div className="cartItemInfo">
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img className="removeBtn" src={remove} alt="remove" />
            </div>
            <div className="cartItem">
              <img
                className="cardItemPhoto"
                width={70}
                height={70}
                src={sneaker1}
                alt="sneaker"
              />
              <div className="cartItemInfo">
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img className="removeBtn" src={remove} alt="remove" />
            </div>
            <div className="cartItem">
              <img
                className="cardItemPhoto"
                width={70}
                height={70}
                src={sneaker1}
                alt="sneaker"
              />
              <div className="cartItemInfo">
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img className="removeBtn" src={remove} alt="remove" />
            </div>
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
      <header>
        <div className="headerLeft">
          <img width={40} height={40} src={logo} alt="logo" />
          <div className="headerInfo">
            <h3>React Shop</h3>
            <p>Best sneaker store</p>
          </div>
        </div>
        <ul className="headerRight">
          <li>
            <img width={18} height={18} src={shop} alt="shop" />
            <span>1250 rub</span>
          </li>
          <li>
            <img width={18} height={18} src={like} alt="like" />
          </li>
          <li>
            <img width={18} height={18} src={profile} alt="profile" />
          </li>
        </ul>
      </header>
      <div className="content">
        <div className="contentTop">
          <h1>All sneakers</h1>
          <div className="searchBlock">
            <img src={vector} alt="vector" />
            <input placeholder="Search" />
          </div>
        </div>
        <div className="cardList">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
