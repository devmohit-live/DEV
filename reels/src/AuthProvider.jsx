import { createContext, useContext, useEffect, useState } from "react";
import { auth, firestore } from "./firebase";

export const AuthContext = createContext();
//props.children
let AuthProvider = ({ children }) => {
  let [currentUser, setCurrentUser] = useState(null);
  let [loading, setState] = useState(true);

  useEffect(() => {
    let unsub = auth.onAuthStateChanged(async (user) => {
      if (user) {
        let { displayName, email, uid, photoURL } = user;

        let docRef = firestore.collection("users").doc(uid);
        let document = await docRef.get();
        if (!document.exists) {
          docRef.set({
            displayName,
            email,
            photoURL,
          });
        }
        setCurrentUser({ displayName, email, uid, photoURL });
      } else {
        setCurrentUser(user);
      }
    });

    setState(false);

    return () => {
      unsub();
    };
  }, []);

  return (
    <AuthContext.Provider value={currentUser}>
      {/* if state is completed then render the children */}
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
