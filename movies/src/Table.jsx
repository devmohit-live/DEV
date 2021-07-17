import React from "react";

class Table extends React.Component {
  state = {
    movies: [],
    currPage: 1,
  };

  componentDidMount() {
    fetch("/movies")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        this.setState({ movies: json });
      });
  }

  render() {
    let numberOfPages = Math.ceil(this.state.movies.length / 5);
    let pages = [];
    for (let i = 1; i <= numberOfPages; i++) {
      pages.push(i);
    }

    let starting = (this.state.currPage - 1) * 5;
    let ending = this.state.currPage * 5 - 1;

    let moviesToDisplay = this.state.movies.slice(
      starting,
      Math.min(ending, this.state.movies.length - 1) + 1
    );

    return (
      <React.Fragment>
        <table className="table table-striped table-hover">
          <thead>
            <tr className="table-hover">
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Rating</th>
              <th scope="col">Price</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {moviesToDisplay.map((el) => {
              return (
                <tr key={el._id}>
                  <td>{el.title}</td>
                  <td>{el.genre.name}</td>
                  <td>{el.numberInStock}</td>
                  <td>{el.dailyRentalRate}</td>
                  <td>Like</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => {
                        let arr = this.state.movies.filter((curr) => {
                          return curr._id != el._id;
                        });
                        this.setState({ movies: arr });
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <nav>
          <ul className="pagination">
            <li
              className="page-item"
              onClick={() => {
                let currPage = this.state.currPage;
                currPage--;
                if (currPage < 1) currPage = 1;
                this.setState({ currPage: currPage });
              }}
            >
              <a className="page-link" href="#">
                Previous
              </a>
            </li>
            {pages.map((el) => {
              return (
                <li
                  className="page-item"
                  onClick={() => {
                    this.setState({ currPage: el });
                  }}
                >
                  <a className="page-link" href="#">
                    {el}
                  </a>
                </li>
              );
            })}
            <li
              className="page-item"
              onClick={() => {
                let currPage = this.state.currPage;
                currPage++;
                if (currPage > numberOfPages) currPage = numberOfPages;
                this.setState({ currPage: currPage });
              }}
            >
              <a className="page-link" href="#">
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
