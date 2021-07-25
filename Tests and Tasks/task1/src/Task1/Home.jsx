import { useState } from "react";
import Modal from "./Modal";
let Home = (props) => {
  let [visible, setVisibility] = useState(false);

  return props.data == [] ? (
    <p>"Loading Data ..."</p>
  ) : (
    <div>
      <ul>
        {props.weatherData.map((el) => {
          return (
            <li
              onClick={(el) => {
                visible ? setVisibility(false) : setVisibility(true);
                <Modal weatherData={el} />;
              }}
              data-toggle="modal"
              data-target="#exampleModalCenter"
            >
              Timepoint : {el.timepoint}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
