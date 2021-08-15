import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  decrementActionCreator,
  incrementActionCreator,
  loginActionCreator,
  logoutActionCreator,
} from "./redux/actions";

function App() {
  let countState = useSelector((state) => {
    // console.log("counter state ", state.counter);
    return state.counter;
  });
  let authState = useSelector((state) => {
    // console.log("auth state ", state.auth);
    return state.auth;
  });

  let dispatch = useDispatch();
  return (
    <div className="App">
      <button onClick={() => dispatch(decrementActionCreator())}>-</button>
      <p>{countState}</p>
      <button onClick={() => dispatch(incrementActionCreator(5))}>+</button>

      <div>
        <button
          onClick={() => {
            dispatch(loginActionCreator());
          }}
        >
          login
        </button>
        <p>{authState ? "some private text" : "login to see the text"}</p>
        <button
          onClick={() => {
            dispatch(logoutActionCreator());
          }}
        >
          logout
        </button>
      </div>
    </div>
  );
}

export default App;
