import { auth } from "./firebase";
import { Redirect } from "react-router-dom";
let Home = (props) => {
  return (
    <div>
      {props.user ? (
        <>
          <h1>{props.user.displayName}</h1>
          <p>Email: {props.user.email}</p>
          <button
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
