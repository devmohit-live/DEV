import { useDispatch, useSelector } from "react-redux";
import "../css/cart.css";
import { addToCart, removeFromCart } from "../redux/actions";

let Cart = () => {
  let dispatch = useDispatch();
  let state = useSelector((state) => state);
  let total = 0;
  let productOnCart = state.filter((el) => {
    return el.incart > 0;
  });
  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Item</th>
            <th scope="col">Quantity</th>
            <th scope="col">Cost</th>
            <th scope="col">Price</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {productOnCart.map((el, index) => {
            total += el.incart * el.Price;
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{el.name}</td>
                <td>{el.incart}</td>
                <td>{el.Price}</td>
                <td>{el.incart * el.Price}</td>
                <td>
                  <button
                    className="tr-cart-button"
                    onClick={() => {
                      dispatch(removeFromCart(el.id));
                    }}
                  >
                    <span class="material-icons">remove_circle</span>
                  </button>
                </td>
                <td>
                  <button
                    className="tr-cart-button-add"
                    onClick={() => {
                      dispatch(addToCart(el.id));
                    }}
                  >
                    <span class="material-icons">add_circle</span>
                  </button>
                </td>
              </tr>
            );
          })}

          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <b>Total: </b>
            </td>
            <td>
              <b>{total}</b>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Cart;
