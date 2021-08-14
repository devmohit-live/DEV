import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { incrementActionCreator } from "./redux/actions";
function App() {
  let state = useSelector((state) => {
    return state;
  });

  let dispatch = useDispatch();
  return (
    <div className="App">
      <p>{state}</p>
      <button onClick={() => dispatch(incrementActionCreator())}>+</button>
    </div>
  );
}

export default App;
