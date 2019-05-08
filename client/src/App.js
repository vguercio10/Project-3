
/* //app.js has all front end code. all logic goes about "html". nothing goes after render funciton.
class App extends Component {
  //function that runs when login form submitted. front end route to axios
  handleSubmit = e => { 
    console.log("testing submit");
    axios.post("/client/api/login").then(response => {
      console.log(response);
      // function that will run any errors
    }).catch(error => {
      console.log(error);
    });
  }
  //render function contains "html"
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          hi.

        {/* sign up form /*}
        <form onSubmit={e => this.handleSubmit(e)}>
          <input type="email" placeholder="Email Address" name="email"></input>
          <input type="password" placeholder="password" name="password"></input>
        </form>
        <button onClick={e => this.handleSubmit(e)}>Submit</button>
        




        </p>
      </div>
    );
  }
}
*/




import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	Link,
  Redirect,
  Switch,
	withRouter
} from 'react-router-dom';
import Auth from "./utils/Auth";
import Nav from "./components/Nav";
import Login from "./components/Login";
import Register from "./components/Register";
import {Container} from "./components/Grid";
import PublicRoute from "./pages/PublicRoute";
// import ProtectedRoute from "./pages/MomDashBoard";
import MomDashBoard from "./pages/MomDashBoard";
import CubDashBoard from "./pages/CubDashBoard";

import './App.css';

//I want to add some basic inline styling here, even though we are bringing in styles
const listStyle = {
	color: 'cornflowerblue',
	listStyle:'none'
  };
//Now we have all the stuff we need .. let's render some components with the Router
const AuthExample = () => (
	<Router>
		<div>
      		<Nav className="App-header"/>
			<Container>
				<AuthButton/>
				<ul style={listStyle}>
					<li><Link to="/public">Public Page</Link></li>
					{/* Link to the page */}
					<li><Link to="/momdashboard">Moms</Link></li>
				
				</ul>
				<Switch>
					<Route path="/public" component={PublicRoute}/>
					<Route path="/login" component={Login}/>
					<Route path="/register" component={Register}/>
					{/* <PrivateRoute path="/protected" component={ProtectedRoute}/> */}
					<PrivateRoute path="/momdashboard" component={MomDashBoard}/>
					<PrivateRoute path="/cubdashboard" component={CubDashBoard}/>

					{/* <Route component={NoMatch} /> */}
				</Switch>
			</Container>
		</div>
	</Router>
)


//Authbutton component / withRouter is imported from react-router
const AuthButton = withRouter(({ history }) => (
	Auth.isAuthenticated ? (
		<div className="container">
			<p>Success! You are Logged In!</p>
			<button className="btn btn-danger" 
				onClick={() => {
					Auth.signout(() => history.push('/'))
				}}>
				Sign out
			</button>
		</div>
	) : (
		<p>You are not logged in.</p>
	)
))

// This is the private route component this checks for an authorized user here
const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route {...rest} render={props => (
		Auth.isAuthenticated ? (
			<Component {...props}/>
		) : (
			<Redirect to={{
				pathname: '/login',
				state: { from: props.location }
			}}/>
		)
	)}/>
)

export default AuthExample