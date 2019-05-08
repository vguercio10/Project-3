import React from 'react';
import RegisterForm from "../RegisterForm";
//The component for doing the actual signup of the User
//This actually registers the user
class Register extends React.Component {
	//Keeps track of the state
	state = {
		redirectToReferrer: false
	}
	//This is the prop to send to the component
	register = (data) => {
		fetch('api/users/register', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json'
			},
			credentials: 'include'
		})
		.then((response) => {
			if (response.status === 200) {
				console.log('Succesfully registered user!');
			}
		})
		.catch((err) => {
			console.log('Error registering user.', err);
		});
	}

	render() {
		return (
			<div>
				<h4>Register a New User</h4>
				{/* This is the actual component */}
				<RegisterForm onRegister={this.register} />
			</div>
		)
	}
}

export default Register