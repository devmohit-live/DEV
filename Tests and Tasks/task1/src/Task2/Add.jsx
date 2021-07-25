let Add = (props) => {
  return (
    <div>
      <button
        onClick={() => {
          fetch("https://www.boredapi.com/api/activity")
            .then(function (res) {
              return res.json();
            })
            .then((json) => {
              // let tmp = props.activityData -> refrence is copied and we can't modify props(send data to props)
              let tmp = props.activityData.map((el) => {
                return el;
              });
              tmp.push(json);
              props.activityHandler(tmp);
              console.log(json);
            });
          alert("New Activity is being added!");
          // // props.activity
          // props.activityHandler([1, 2, 3]);
        }}
      >
        New Activity
      </button>
    </div>
  );
};
export default Add;
