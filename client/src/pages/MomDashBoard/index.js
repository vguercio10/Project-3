import React from 'react';
import {Container, Row, Col} from '../../components/Grid';
import userPhoto from '../../images/user-placeholder.png';
import Card from '../../components/Card'
/*ToDo*/
/**
 * Let's get some styling in here
 */

/* This is a very simple component.. it probably doesn't need to be a smart component at this point but you never know what's goingto happen in the future */
class ProtectedRoute extends React.Component {
	render() {
		return (
			<Container>	
				<Row> 
					<Col size="md-6">
						<h3>Welcome, Mom-username!</h3>	
					</Col>
				</Row>
				<Row>
					<Col size="md-6">
						<img height="200px" src={userPhoto}/>
					</Col>
				</Row>
				<Row>
					<Col size="md-6">
						<Card title="Bulletin Board" >
							*Advice Requests displayed here.
						</Card>
					</Col>
					<Col size="md-6">
						<Card title="Answered Questions" >
							*History of answered advice requests displayed here in order most recent.
						</Card>
					</Col>
				</Row>
			</Container>	
		)
	}
}

export default ProtectedRoute
