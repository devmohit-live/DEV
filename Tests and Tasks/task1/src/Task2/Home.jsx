let Home = (props) => {
  return (
    <div>
      <ul>
        {props.activityData.map((el, index) => {
          return <li key={index}>{el.activity}</li>;
        })}
      </ul>
    </div>
  );
};

export default Home;
