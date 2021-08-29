import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route to="/personal">
            <Login />
          </Route>
          <Route to="/login">
            <Login />
          </Route>
          <Route to="/signup">
            <SignUp />
          </Route>
          <Route to="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
