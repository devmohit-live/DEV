import { auth } from "./firebase";
import { Redirect } from "react-router-dom";
import { userContext } from "./App";
import { useContext } from "react";

let Home = () => {
  let value = useContext(userContext);
  return (
    <div>
      {value ? (
        <>
          <h1>{value.displayName}</h1>
          <p>Email: {value.email}</p>
          <button
            className="logut-btn"
            onClick={() => {
              auth.signOut();
            }}
          >
            Logout
          </button>
        </>
      ) : (
        // manual / forecull routing
        <Redirect to="/login" />
      )}
    </div>
  );
};

export default Home;
