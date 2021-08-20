import "../css/product.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions";
let Product = () => {
  let dispatch = useDispatch();
  return (
    <>
      <div className="product-container">
        <Link to="/preview/1">
          <div className="product-img-container">
            <img className="product-img" src="/phone.jpeg" />
          </div>
        </Link>

        <div className="product_button">
          <button
            onClick={() => {
              console.log("dispatching");
              dispatch(addToCart(1));
            }}
          >
            Buy
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;
