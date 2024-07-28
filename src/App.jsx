import { useState } from "react";
import "./App.css";
import imgPlaceholder from "./assets/img-placeholder.png";
import cartIcon from "./assets/cart-shopping.svg";

// App component, which renders the whole shopping cart components
function App() {
  // Product name and price. You can add your own product here.
  const initialState = [
    {
      poductName: "Meta Quest 3",
      price: 499,
    },
    {
      poductName: "Apple iPhone 15 Pro",
      price: 1656,
    },
    {
      poductName: "RØDE PodMic",
      price: 199,
    },
    {
      poductName: "Razer BlackShark V2 Pro",
      price: 98,
    },
    {
      poductName: "Blackmagic Cinema Camera 6K Pro",
      price: 2535,
    },
    {
      poductName: "GTRACING Gaming Chair",
      price: 160,
    },
  ];
  const [addToCart, setAddToCart] = useState(0);
  const [shoppingCardData, setShoppingCardData] = useState(initialState);
  return (
    <>
      <NavBar addToCart={addToCart} />
      <div className="container">
        <Card
          shoppingCardData={shoppingCardData}
          setAddToCart={setAddToCart}
          addToCart={addToCart}
        />
      </div>
    </>
  );
}

// NavBar component
function NavBar({ addToCart }) {
  return (
    <nav className="navbar navbar-expand-lg bg-light" data-bs-theme="light">
      <div className="container-fluid">
        <a className="navbar-brand ps-1" href="#">
          Shopping Cart
        </a>
        <button
          id="collapseButton"
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <button className="btn btn-outline-dark cart-btn" type="submit">
              <img className="cartIcon" src={cartIcon} alt="cart-icon" />
              <span className="cart-btn-text">Cart</span>
              <span className="badge bg-dark text-white rounded-pill cart-btn-text2">
                {addToCart}
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Card component
function Card({ shoppingCardData, setAddToCart, addToCart }) {
  return shoppingCardData.map((val, index) => (
    <div key={index} className="card h-100 shadow-lg">
      <div className="card-body">
        <img
          src={imgPlaceholder}
          className="card-img-top"
          alt="img-placeholder"
        ></img>
        <h5 className="card-title">{val.poductName}</h5>
        <p className="card-text">
          <span>${val.price}</span>
          <br />
        </p>
        <AddToCartBtn
          key={index}
          setAddToCart={setAddToCart}
          addToCart={addToCart}
        />
      </div>
    </div>
  ));
}

// Increase and decrease the item count in the cart
function cartCount(setAddToCart, addToCart, show) {
  if (show) {
    setAddToCart(addToCart + 1);
  } else {
    setAddToCart(addToCart - 1);
  }
}

// Add to cart button component.
function AddToCartBtn({ setAddToCart, addToCart }) {
  const [show, setShow] = useState(true);

  return (
    <button
      type="button"
      className="btn btn-primary text-uppercase"
      onClick={() => {
        cartCount(setAddToCart, addToCart, show);
        setShow(!show);
      }}
    >
      {show ? "Add to cart" : "Remove From cart"}
    </button>
  );
}
