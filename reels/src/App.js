import { useEffect } from "react";
import { firestore } from "./firebase";
import Login from "./Login";
function App() {
  useEffect(() => {
    let f = async () => {
      let querySnapshot = await firestore
        .collection("posts")
        .limit(2)
        .orderBy("index", "desc")
        .get();
      querySnapshot.forEach((doc) => console.log(doc.data()));
    };

    f();
  }, []);

  return (
    <div>
      <Login />
    </div>
  );
}

export default App;
