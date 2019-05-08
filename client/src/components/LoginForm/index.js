import React from 'react'
import "./style.css";
import { Media } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';



class LoginForm extends React.Component {
	// refs
	form: null;
	usernameElem: null;
	passwordElem: null;

	render() {
		const { onLogin } = this.props;
		return (
	<Container>
		<Row>
			<Col> 
      <Media>
        <Media object data-src="client/src/components/LoginForm/images/Amother.png/300px300" alt="Generic placeholder image" />
      </Media>
	  		</Col>
			<Col>
			<h2>Login:</h2>
			<form
					ref={(elem) => this.form = elem}
					onSubmit={(e) => {
						e.preventDefault();
						return onLogin({
							username: this.usernameElem.value,
							password: this.passwordElem.value
						});
					}}
				>
					<div className="form-group">
						<input className="form-control" ref={(input) => this.usernameElem = input} type='text' name="username" placeholder='Enter Username' /><br/>
						<input className="form-control" ref={(input) => this.passwordElem = input} type='password' name="password" placeholder='Password' /><br/>
						<button className="btn btn-success" type='submit'>
							Submit
						</button>
					</div>
				</form>
			</Col>
		</Row>
				
			</Container>
		)
	}
}

export default LoginForm
