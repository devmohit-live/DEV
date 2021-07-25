import { useState, useEffect } from "react";
import Home from "./Task2/Home";
import Add from "./Task2/Add";
let App = () => {
  let [activities, setActivity] = useState([]);

  // useEffect(() => {
  //   console.log("use effect is running");
  // }, [activities]);
  
  console.log(activities);
  return (
    <div>
      <Add activityHandler={setActivity} activityData={activities} />
      <Home activityData={activities} />;
    </div>
  );
};

export default App;
