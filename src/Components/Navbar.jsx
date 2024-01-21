import React from 'react'
import PropTypes from 'prop-types'

// Function to render the Navbar component
function Navbar(props) {  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      {/* Container for the Navbar content */}
      <div className="container-fluid">
        {/* Title of the website */}
        <a className="navbar-brand" href="/">{props.title}</a>
        {/* Button to toggle the Navbar on smaller screens */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Container for the Navbar items */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* List of Navbar items */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* Home Navbar item */}
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">{props.home}</a>
            </li>
            {/* About Navbar item */}
            <li className="nav-item">
              <a className="nav-link" href="/">{props.about}</a>
            </li>
          </ul>
          {/* Dark mode toggle switch */}
          <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label class="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

// PropTypes for the Navbar component props
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  home : PropTypes.string.isRequired,
  about: PropTypes.string.isRequired
}

// Default props for the Navbar component
Navbar.defaultProps = {
  title: "HilariousTech",
  home:"Home",
  about:"About"
}

// Export the Navbar component
export default Navbar