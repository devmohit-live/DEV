import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import { useEffect } from "react";
import { auth, firestore } from "./firebase";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/actions";
import Personal from "./components/Personal";
import Qualifications from "./components/Qualifications";
import PublicPreview from "./components/PublicPreview";
let App = () => {
  let dispatch = useDispatch();

  useEffect(() => {
    let unsub = auth.onAuthStateChanged(async (user) => {
      dispatch(setUser(user));

      if (user) {
        let { uid, email } = user;

        let docRef = firestore.collection("users").doc(uid);
        let doc = await docRef.get();
        if (!doc.exists) {
          docRef.set({ email });
        }
      }
    });

    return () => {
      unsub();
    };
  }, []);

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/publicpreview/:rid">
            <PublicPreview />
          </Route>
          <Route path="/qualifications">
            <Qualifications />
          </Route>
          <Route path="/personal">
            <Personal />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
