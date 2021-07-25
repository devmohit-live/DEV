import { useState, useEffect } from "react";
import Home from "./Home";
let Task1App = () => {
  let [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0"
    )
      .then(function (res) {
        return res.json();
      })
      .then((json) => {
        setData(json["dataseries"]);

        console.log("Use effect is working2");
        console.log(data[0]);
      });
    console.log("Use effect is working");
  }, []);

  return (
    <div>
      <Home weatherData={data} />
    </div>
  );
};

export default Task1App;
