import React from 'react'



class RegisterForm extends React.Component {
	// refs
	form: null;
	usernameElem: null;
	passwordElem: null;
	ageElem: null;
	genderElem: null;


	render() {
		const { onRegister } = this.props;
		console.log(`Register form props are: ${JSON.stringify(this.props)}`);
		
		return (
			
				<form
					ref={(elem) => this.form = elem}
					onSubmit={(e) => {
						e.preventDefault();
						return onRegister({
							username: this.usernameElem.value,
							password: this.passwordElem.value,
							age: this.ageElem.value,
							gender: this.genderElem.value,
						
						});
					}}
				>
					<div className="form-group">
						<input className="form-control" ref={(input) => this.usernameElem = input} type='text' name="username" placeholder='Enter Username' /><br/>
						
						<input className="form-control"  ref={(input) => this.passwordElem = input} type='password' name="password" placeholder='Password' /><br/>
						
						<input className="form-control"  ref={(input) => this.ageElem = input} type='integer' name="age" 
						placeholder='Age' /><br/>
						
						<input className="form-control"  ref={(input) => this.genderElem = input} type='text' name="gender" placeholder='Gender' /><br/>
						
						<div className="dropdown">
  						<button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    					Dropdown button
  						</button>
  						<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    					<a class="dropdown-item" href="#">Admin</a>
    					<a class="dropdown-item" href="#">User</a>
 					 	</div>
						</div>
						<button className="btn btn btn-primary" type='submit'>Submit</button>
					</div>
				</form>
			
		)
	}
}

export default RegisterForm