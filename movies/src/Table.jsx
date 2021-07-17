import React from "react";

class Table extends React.Component {
  state = {
    movies: [
      {
        _id: "5b21ca3eeb7f6fbccd471815",
        title: "Terminator",
        genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
        numberInStock: 6,
        dailyRentalRate: 2.5,
      },
      {
        _id: "5b21ca3eeb7f6fbccd471816",
        title: "Die Hard",
        genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
        numberInStock: 5,
        dailyRentalRate: 2.5,
      },
      {
        _id: "5b21ca3eeb7f6fbccd471817",
        title: "Get Out",
        genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
        numberInStock: 8,
        dailyRentalRate: 3.5,
      },
      {
        _id: "5b21ca3eeb7f6fbccd471819",
        title: "Trip to Italy",
        genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
        numberInStock: 7,
        dailyRentalRate: 3.5,
      },
      {
        _id: "5b21ca3eeb7f6fbccd47181a",
        title: "Airplane",
        genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
        numberInStock: 7,
        dailyRentalRate: 3.5,
      },
      {
        _id: "5b21ca3eeb7f6fbccd47181b",
        title: "Wedding Crashers",
        genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
        numberInStock: 7,
        dailyRentalRate: 3.5,
      },
      {
        _id: "5b21ca3eeb7f6fbccd47181e",
        title: "Gone Girl",
        genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
        numberInStock: 7,
        dailyRentalRate: 4.5,
      },
      {
        _id: "5b21ca3eeb7f6fbccd47181f",
        title: "The Sixth Sense",
        genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
        numberInStock: 4,
        dailyRentalRate: 3.5,
      },
      {
        _id: "5b21ca3eeb7f6fbccd471821",
        title: "The Avengers",
        genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
        numberInStock: 7,
        dailyRentalRate: 3.5,
      },
    ],
  };

  render() {
    let pages = [];
    let noOfPages = Math.ceil(this.state.movies.length / 5);
    for (let i = 1; i <= noOfPages; i++) {
      pages.push(i);
    }

    return (
      <React.Fragment>
        <table class="table table-striped table-hover">
          <thead>
            <tr class="table-hover">
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Rating</th>
              <th scope="col">Price</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((el, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{Number(index) + 1}</th>
                  <td>{el.title}</td>
                  <td>{el.genre.name}</td>
                  <td>{el.numberInStock}</td>
                  <td>{el.dailyRentalRate}</td>
                  <td>Like</td>
                  <td>
                    <button type="button" class="btn btn-danger">
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <nav>
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" href="#">
                Previous
              </a>
            </li>
            {pages.map((el) => {
              return (
                <li class="page-item">
                  <a class="page-link" href="#">
                    {el}
                  </a>
                </li>
              );
            })}
            <li class="page-item">
              <a class="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

export default Table;
