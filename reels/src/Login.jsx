import { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { auth, signInWithGoogle } from "./firebase";
let Login = (props) => {
  useEffect(() => {
    // justlike onSnapshot in firestore we have onAuthStateChanged in auth
    auth.onAuthStateChanged((user) => {
      // user is null at ther logout event and have some object at login
      if (user) {
        //login

        //destructing
        let { displayName, email } = user;

        props.handleUser({ displayName, email });
        console.log({ displayName, email });
      } else {
        props.handleUser(user); // passing null
      }
    });
  }, []);

  return (
    <div>
      {/* forecful routing/ manual routing */}
      {props.user ? <Redirect to="/home" /> : ""}

      <button
        onClick={signInWithGoogle}
        type="submit"
        className="btn btn-primary m-4"
      >
        Login With Google
      </button>
    </div>
  );
};

export default Login;
