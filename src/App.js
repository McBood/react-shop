import "./App.scss";
import logo from "./assets/img/logo.svg";
import like from "./assets/img/like.svg";
import shop from "./assets/img/shop.svg";
import profile from "./assets/img/profile.svg";
import Card from "./components/card/Card";

function App() {
  return (
    <div className="wrapper">
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
        <h1>All sneakers</h1>
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
