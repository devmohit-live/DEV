import { useState } from "react";
// import { firestore } from "./firebase";
import Login from "./Login";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
      <Switch>
        <Route path="/login">
          <Login handleUser={setUser} user={user} />
        </Route>
        <Route path="/home">
          <Home user={user} />
        </Route>
        <Route path="/">
          <Home user={user} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
