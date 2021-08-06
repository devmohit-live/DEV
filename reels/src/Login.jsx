import { useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { userContext } from "./App";
import { auth, firestore, signInWithGoogle } from "./firebase";



let Login = (props) => {
  useEffect(() => {
    // justlike onSnapshot in firestore we have onAuthStateChanged in auth
    auth.onAuthStateChanged(async (user) => {
      // user is null at ther logout event and have some object at login
      if (user) {
        let { displayName, email, uid } = user;
        let docRef = firestore.collection("users").doc(uid);
        let document = await docRef.get();
        //has the attribute of exists that check wheather the document actually exixted or the temporary refrence is returned
        if (!document.exists) {
          // if not exists then create one woth these values
          docRef.set({
            displayName,
            email,
            posts: [],
          });
        }

        props.handleUser({ displayName, email });
        console.log({ displayName, email });
      } else {
        props.handleUser(user); // passing null
      }
    });
  }, []);




  let value = useContext(userContext);

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
