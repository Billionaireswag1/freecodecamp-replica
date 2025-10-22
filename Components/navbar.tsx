import logo from '../src/Assets/Freecodecamp logo.jpeg'

import  '../src/Navbar.css'
const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark px-4 py-2">
      <div className="container-fluid d-flex align-items-center justify-content-between">
        
        {/* Logo + Brand */}
        <div className="d-flex align-items-center">
          <img src={logo} alt="FreeCodeCamp Logo" style={{ height: '30px', marginRight: '10px'}} />
          <span className="navbar-brand text-light mb-0">FreeCodeCamp Replica</span>
        </div>

        {/* Search Bar */}
        <form className="d-flex flex-grow-1 mx-4" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>

        {/* Links / Buttons */}
        <div className="d-flex align-items-center">
          <a href="#" className="btn btn-outline-light btn-sm me-2">Login</a>
          <a href="#" className="btn btn-warning btn-sm">Sign Up</a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;