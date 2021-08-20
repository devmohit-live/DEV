import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cart from "./components/cart";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Preview from "./components/preview";
import { useSelector } from "react-redux";

function App() {
  let state = useSelector((state) => state);
  console.log(state);
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/preview/:id">
            <Preview />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
