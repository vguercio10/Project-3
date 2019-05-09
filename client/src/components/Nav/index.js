import React, { Component } from "react";
import { Link,withRouter } from "react-router-dom";
import Auth from "../../utils/Auth";
import "./style.css";


// import Login from "../LoginForm";
//Authbutton component / withRouter is imported from react-router
const AuthButton = withRouter(({ history }) => (
	Auth.isAuthenticated ? (
    <ul class="nav navbar-nav navbar-right">
			<button className="btn btn-danger" 
				onClick={() => {
					Auth.signout(() => history.push('/'))
				}}>
				Sign out
			</button>
    </ul>
	) : (
		<p>You are not logged in.</p>
	)
))

class Nav extends Component {
  state = {
    open: false,
    width: window.innerWidth
  };

  updateWidth = () => {
    const newState = { width: window.innerWidth };

    if (this.state.open && newState.width > 991) {
      newState.open = false;
    }

    this.setState(newState);
  };

  toggleNav = () => {
    this.setState({ open: !this.state.open });
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateWidth);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light mb-2">
        <Link className="navbar-brand" to="/">
          Home
        </Link>
        <button
          onClick={this.toggleNav}
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* links! */}
      
        <div className={`${this.state.open ? "" : "collapse "}navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
                to="/login"
              >
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
                to="/cubdashboard"
              >
                Cub              </Link>
            </li>
            <li>
              <Link onClick={this.toggleNav}
                className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
                to="/register"
              
              >Register a New User</Link>
            </li>
            
					  <li><Link onClick={this.toggleNav} className={window.location.pathname ==="/" ? "nav-link active" : "nav-link"} to="/public">Public Page</Link></li>
					  {/* Link to the page */}
					  <li><Link onClick={this.toggleNav} className={window.location.pathname ==="/" ? "nav-link active" : "nav-link"} to="/momdashboard">Moms</Link></li>
            

            {/* <li className="nav-item">
              <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
                to="/"
              >
                Search
              </Link>
            </li> */}
            {/* <li className="nav-item">
              <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                to="/saved"
              >
                Saved
              </Link>
            </li> */}
          </ul>
          <AuthButton/>
        </div>
      </nav>
    );
  }
}

export default Nav;