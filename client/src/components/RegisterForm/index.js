import React from 'react'
import { Container, Row, Col, FormGroup, Label, Input } from 'reactstrap';


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
				{/* Inputs for registering new user */}
					<div className="form-group">
						<input className="form-control" ref={(input) => this.usernameElem = input} type='text' name="username" placeholder='Enter Username' /><br/>
						
						<input className="form-control"  ref={(input) => this.passwordElem = input} type='password' name="password" placeholder='Password' /><br/>
						
						<input className="form-control"  ref={(input) => this.ageElem = input} type='integer' name="age" 
						placeholder='Age' /><br/>
						
						<input className="form-control"  ref={(input) => this.genderElem = input} type='text' name="gender" placeholder='Gender' /><br/>
						{/* <FormGroup>
          					<Label for="exampleSelect">Select</Label>
          						<Input type="select" ref={(value) => this.accountElem = value} name="select">
            						<option value= "admin">Mother</option>
            						<option value="user">User</option>
          						</Input>
        					</FormGroup> */}

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