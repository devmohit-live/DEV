import { useEffect, useState } from "react";
import "./App.css";
//importing {} because firestore wasn't the default import
import { firestore } from "./firebase";
function App() {
  let [posts, setData] = useState([]);
  useEffect(() => {
    // as promise is returned
    let fx = async () => {
      //get the refrece of main collection
      let ref = firestore.collection("posts");
      let querySnapshot = await ref.get(); //actual cusror to documents in collection/querySnapshot
      // collection have it's own forEach method for iteration
      let tmp = [];
      querySnapshot.forEach((doc) => {
        tmp.push(doc);
      });

      setData(tmp);
    };

    //calling that fx
    fx();
  }, []);
  return (
    <div>
      <ul>
        {posts.map((el, idx) => {
          return <li key={idx}>{el.data().Body}</li>;
        })}
      </ul>
      <input
        placeholder="What's on yuor Mind?"
        onKeyDown={(e) => {
          let val = e.currentTarget.value.trim();
          if (val !== "" && e.key === "Enter") {
            //adding data to firestore
            firestore.collection("posts").add({ Body: val });
            e.currentTarget.value = "";
          }
        }}
      />
    </div>
  );
}

export default App;
