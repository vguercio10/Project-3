import React from 'react'
import { Container, Row, Col } from 'reactstrap';


class RegisterForm extends React.Component {
	// refs
	form: null;
	usernameElem: null;
	passwordElem: null;
	ageElem: null;
	genderElem: null;
	accountElem: null;

	render() {
		const { onRegister } = this.props;
		console.log(`Register form props are: ${JSON.stringify(this.props)}`);
		
		return (
			<Container>
		<Row>
			<Col></Col>
			<Col> <h4>Register a New User</h4>
				<form
					ref={(elem) => this.form = elem}
					onSubmit={(e) => {
						e.preventDefault();
						return onRegister({
							username: this.usernameElem.value,
							password: this.passwordElem.value,
							age: this.ageElem.value,
							gender: this.genderElem.value,
							account: this.accountElem.value
						
						});
					}}
				>
					<div className="form-group">
						<input className="form-control" ref={(input) => this.usernameElem = input} type='text' name="username" placeholder='Enter Username' /><br/>
						
						<input className="form-control"  ref={(input) => this.passwordElem = input} type='password' name="password" placeholder='Password' /><br/>
						
						<input className="form-control"  ref={(input) => this.ageElem = input} type='integer' name="age" 
						placeholder='Age' /><br/>
						
						<input className="form-control"  ref={(input) => this.genderElem = input} type='text' name="gender" placeholder='Gender' /><br/>
						
						{/* <div className="dropdown">
  						<button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    					Account type
  						</button>
  						<div className="dropdown-menu" ref={(value) => this.accountElem = value} type="select" name="account" aria-labelledby="dropdownMenuButton">
						
    					<a className="dropdown-item" value = "admin" href="#">Admin</a>
    					<a className="dropdown-item" value = "user" href="#">User</a>
						
 					 	</div>
						</div> */}
						
    				
  						
						<select ref={(value) => this.accountElem = value}>
  							<option value="admin">Admin</option>
  							<option value="user">User</option>
  						</select>
						
						<br></br>
						<br></br>

						<button className="btn btn btn-primary" type='submit'>Submit</button>
					</div>
				</form>
			</Col>
			<Col></Col>
			</Row></Container>
		)
	}
}

export default RegisterForm