import React from "react";
function Search(props) {
  return (
    <React.Fragment>
      <p className="mt-4">
        Showing {props.countOfMovies} movies from Database..
      </p>

      <button type="button" className="btn btn-primary mb-3">
        New
      </button>

      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search.."
          aria-label="Search"
          aria-describedby="basic-addon1"
          onChange={(e) => {
            props.searchHandler(e.currentTarget.value);
          }}
        />
      </div>
    </React.Fragment>
  );
}

export default Search;
