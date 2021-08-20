import { useHistory, Link } from "react-router-dom";
import "../css/navbar.css";

let Navbar = () => {
  let history = useHistory();
  return (
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid my-nav-container">
        <Link to="/">
          <span class="navbar-brand mb-0 h1">Shopping Cart</span>
        </Link>
        <button
          class="btn btn-outline-warning"
          onClick={() => {
            history.push("/cart");
          }}
        >
          <span class="material-icons">shopping_cart</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
