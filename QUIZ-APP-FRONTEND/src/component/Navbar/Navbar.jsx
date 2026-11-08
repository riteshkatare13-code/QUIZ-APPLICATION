import { Link } from 'react-router-dom';
import logoImg from '../../assets/react.svg'; // Replace with your quiz icon path

export const Navbar = () => {
  return (
    <nav className="navbar sm:navbar-expand bg-1 fg-2">
      <div className="container-fluid">
        {/* Brand Container with Responsive Image Side */}
        <Link className="navbar-brand-wrapper" to="/">
          <img className="navbar-brand-logo" src={logoImg} alt="Quizify Logo" />
          <span className="navbar-brand-text">QUIZIFY</span>
        </Link>
        <button
          className="btn-icon navbar-toggler"
          type="button"
          data-bs-toggle="drawer"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" aria-hidden="true"></span>
        </button>
        {/* Fixed tabIndex below */}
        <dialog
          className="drawer drawer-end"
          tabIndex="-1"
          id="navbarNavAltMarkup"
          aria-labelledby="navbarNavAltMarkupLabel"
        >
          <div className="drawer-header">
            <h5 className="drawer-title" id="navbarNavAltMarkupLabel">
              Menu
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="drawer"
              aria-label="Close"
            ></button>
          </div>
          <div className="drawer-body">
            <div className="nav nav-pills navbar-nav">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/">
                Quiz Play
              </Link>
            </div>
          </div>
        </dialog>
      </div>
    </nav>
  );
};
