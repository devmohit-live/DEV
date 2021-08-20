import { useHistory } from "react-router-dom";
import "../css/home.css";
import Product from "./product";
let Home = () => {
  let history = useHistory();
  return (
    <>
      <div className="product-preview-container">
        <Product />
        <Product />
        <Product />
      </div>

      <button
        onClick={() => {
          history.push("/cart");
        }}
        className="cart-button"
      >
        <span class="material-icons">shopping_cart</span>
      </button>
    </>
  );
};

export default Home;
