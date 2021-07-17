import React from "react";
class Search extends React.Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <p class="mt-4"> Showing 9 movies from Database..</p>

        <button type="button" class="btn btn-primary mb-3">
          New
        </button>

        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Search.."
            aria-label="Search"
            aria-describedby="basic-addon1"
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Search;
