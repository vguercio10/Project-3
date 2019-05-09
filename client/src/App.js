import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	Link,
  Redirect,
  Switch
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