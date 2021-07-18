import { Link } from "react-router-dom";

function Navbar() {
  let navlinks = document.querySelectorAll(".nav-link");
  for (let i = 0; i < navlinks.length; i++) {
    navlinks[i].addEventListener("click", (e) => {
      for (let i = 0; i < navlinks.length; i++) {
        navlinks[i].classList.remove("active");
      }
      e.currentTarget.classList.add("active");
    });
  }
  console.log(navlinks);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          MovieRentals
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Movies
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cutomers">
                Customers
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/rental">
                Rentals
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
