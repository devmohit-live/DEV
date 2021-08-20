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

        <div className="product_button btn liveAlertBtn">
          <button
            onClick={() => {
              console.log("dispatching");
              dispatch(addToCart(props.data.id));

              // here
              var alertPlaceholder = document.getElementById(
                "liveAlertPlaceholder"
              );
              var alertTrigger = document.querySelector(".liveAlertBtn");

              function alert(message, type) {
                var wrapper = document.createElement("div");
                wrapper.innerHTML =
                  '<div class="alert alert-' +
                  type +
                  ' alert-dismissible" role="alert">' +
                  message +
                  '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';

                alertPlaceholder.append(wrapper);
              }
              alert(`${props.data.name} added to cart`, "success");
              setTimeout(() => {
                let btn = document.querySelector(".btn-close");
                if (btn) btn.click();
              }, 1500);
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
