import { auth, storage, firestore } from "./firebase";
import { Redirect } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { useContext, useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import "./Home.css";

let Home = () => {
  
  let value = useContext(AuthContext);
  let [posts, setPosts] = useState([]);

  useEffect(() => {
    let unsubscription = firestore
      .collection("posts")
      .onSnapshot((querySnapshot) => {
        setPosts(
          querySnapshot.docs.map((doc) => {
            return doc.data();
          })
        );
      });

    return () => {
      unsubscription();
    };
  }, []);

  return (
    <div>
      {value ? (
        <>
          <div className="posts-container">
            <VideoCard />
            <VideoCard />
            <VideoCard />
          </div>

          <button
            className="logout-btn"
            onClick={() => {
              auth.signOut();
            }}
          >
            Logout
          </button>

          <input
            className="upload-btn"
            type="file"
            onChange={(e) => {
              // console.log(e.target.files);
              let file = e.target.files[0];
              let { name, size, type } = file;
              size = size / 1000000;
              type = type.split("/")[0];
              // console.log(name, size, type);
              let uploadTask = storage
                .ref(`/posts/${value.uid}/${Date.now() + name}`)
                .put(file);

              // the upload method gives us uploadTask which can be used to set up
              //state_changed event
              //this takes 3 callbacks

              let f1 = (snapshot) => {
                console.log(snapshot.bytesTransferred);
                console.log(snapshot.totalBytes);
              };

              let f2 = (error) => {
                console.log(error);
              };

              let f3 = () => {
                let p = uploadTask.snapshot.ref.getDownloadURL();
                p.then((url) => {
                  firestore.collection("posts").add({
                    username: value.displayName,
                    url,
                    likes: 0,
                    comments: [],
                  });
                  // console.log(p);
                });
              };

              uploadTask.on("state_changed", f1, f2, f3);
            }}
          />
        </>
      ) : (
        <Redirect to="/" />
      )}
    </div>
  );
};

export default Home;
