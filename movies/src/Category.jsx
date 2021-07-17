import React from "react";

class Category extends React.Component {
  state = {
    allGenre: [
      "Action",
      "Thriller",
      "Romance",
      "Comedy",
      "Sci-Fi",
      "Fiction",
      "Documentary",
      "Biography",
    ],
  };

  render() {
    return (
      <ul class="list-group">
        {this.state.allGenre.map((el, index) => {
          return (
            <li class="list-group-item" key={index}>
              {el}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Category;
