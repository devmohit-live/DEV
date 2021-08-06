import { useState } from "react";
// import { firestore } from "./firebase";
import Login from "./Login";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createContext } from "react";

let userContext = createContext();
function App() {
  // useEffect(() => {
  //   let f = async () => {
  //     // let querySnapshot = await firestore
  //     //   .collection("posts")
  //     //   .limit(2)
  //     //   .orderBy("index", "desc")
  //     //   .get();
  //     // querySnapshot.forEach((doc) => console.log(doc.data()));
  //   };

  //   f();
  // }, []);

  let [user, setUser] = useState(null);

  return (
    <Router>
      <userContext.Provider value={user}>
        <Switch>
          <Route path="/login">
            <Login handleUser={setUser} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </userContext.Provider>
    </Router>
  );
}

export { userContext };
export default App;
