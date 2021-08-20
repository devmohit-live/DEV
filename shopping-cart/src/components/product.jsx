import "../css/product.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions";
let Product = (props) => {
  let dispatch = useDispatch();

  // console.log(props.data);
  return (
    <>
      <div className="product-container">
        <Link to={`/preview/${props.data.id}`}>
          <div className="product-img-container">
            <img className="product-img" src={props.data.img} />
          </div>
        </Link>

        <div className="product_button">
          <button
            onClick={() => {
              console.log("dispatching");
              dispatch(addToCart(props.data.id));
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
