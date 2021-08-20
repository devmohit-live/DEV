import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cart from "../components/cart";
import Product from "../components/product";
import Home from "../components/home";
import Navbar from "../components/navbar";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/product">
            <Product />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
