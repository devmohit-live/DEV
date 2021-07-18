import React from "react";

class Category extends React.Component {
  state = {
    allGenre: [],
  };

  componentDidMount() {
    //fetch is an async function
    // fetch("localhost:4000/genre") => since proxy is used then we have to just use the relative address
    fetch("/genre")
      .then((res) => {
        // this is also an async function
        return res.json();
      })
      .then((jsonArr) => {
        // this then is for returned res.json promise
        this.setState({ allGenre: jsonArr });
        // console.log(jsonArr);
      });
  }

  render() {
    return (
      <ul className="list-group">
        <li
          className="list-group-item"
          onClick={(e) => {
            this.props.categoryHandler("All");
          }}
          key={0}
        >
          All Genre
        </li>
        {this.state.allGenre.map((el) => {
          return (
            <li
              className="list-group-item"
              onClick={(e) => {
                this.props.categoryHandler(el["name"]);
              }}
              key={el["_id"]}
            >
              {el["name"]}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Category;
