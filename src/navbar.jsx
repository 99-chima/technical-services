import pagelogo from "./logo.jpeg";
import {Link} from "react-router-dom";
const Navbar = () => {
    return(
        <>  
        <div className="mt-3 fixed-top bg-white">
        <img className="ms-5 px-5 mt-3 logo" src={pagelogo} alt="" />
            
        <nav className="navbar navbar-expand-lg mb-4">
      <div className="container-fluid bg-white">
        <Link className="navbar-brand" to="/"></Link>

        {/* Toggle button for dropdown */}
        <button
          className="navbar-toggler dropdown"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* dropdown menu */}
        <div
         className="collapse navbar-collapse" id="navbarNavDropdown"
        >
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-4 navBar">
              <li className="nav-item">
                <Link className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pricing">pricing</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/components">Components</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link btn navbar-btn text-uppercase mt-2" to="/download">download</Link>
              </li>
            </ul>
          
        </div>
      </div>
    </nav>
        </div>
        </>
    );
};
export default Navbar;
