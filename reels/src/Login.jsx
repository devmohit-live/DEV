import { useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { auth, firestore, signInWithGoogle } from "./firebase";

let Login = (props) => {
  let value = useContext(AuthContext);

  return (
    <div className="my-container">
      {/* forecful routing/ manual routing */}
      {value ? <Redirect to="/home" /> : ""}

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
