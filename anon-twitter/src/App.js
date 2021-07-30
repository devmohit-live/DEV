import { useEffect, useState } from "react";
import "./App.css";
//importing {} because firestore wasn't the default import
import { firestore } from "./firebase";
function App() {
  let [posts, setPosts] = useState([]);

  useEffect(() => {
    let f = async () => {
      await firestore.collection("posts").onSnapshot((querySnapshot) => {
        let tempArr = [];

        querySnapshot.forEach((doc) => {
          tempArr.push(doc);
        });

        setPosts(tempArr);
      });
    };

    f();
  }, []);

  return (
    <div>
      <ul>
        {posts.map((el, idx) => {
          return <li key={idx}>{el.data().Body}</li>;
        })}
      </ul>
      <input
        placeholder="What's on your Mind?"
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
