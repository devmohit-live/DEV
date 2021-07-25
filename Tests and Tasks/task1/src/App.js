import { useState, useEffect } from "react";
import Home from "./Task2/Home";
import Add from "./Task2/Add";

import "./App.css";

let App = () => {
  let [activities, setActivity] = useState([]);

  useEffect(() => {
    if (activities.length == 0) return;

    let p = document.createElement("p");
    p.innerText = "New Activity was added";
    p.classList.add("msg");
    document.querySelector("body").append(p);

    setTimeout(() => {
      p.remove();
    }, 1000);
  }, [activities]);

  console.log(activities);
  return (
    <div>
      {/* Task : 2  */}
      <Add activityHandler={setActivity} activityData={activities} />
      <Home activityData={activities} />

    </div>
  );
};

export default App;
