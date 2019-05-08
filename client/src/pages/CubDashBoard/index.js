import React from 'react';
import {Container, Row, Col} from '../../components/Grid';
import QuestionSubmit from '../../components/QuestionSubmit';
import userPhoto from '../../images/user-placeholder.png';
import Card from '../../components/Card';

class ProtectedRoute extends React.Component {
	render() {
		return (
			<Container>	
				<Row> 
					<Col size="md-6">
						<h3>Welcome, Cub-username!</h3>	
					</Col>
				</Row>
				<Row>
					<Col size="md-6">
						<img height="200px" src={userPhoto}/>
					</Col>
				</Row>
				<Row>
					<Col size="md-6">
					<h3>Messages with Mama Bear</h3>
						<Card title="Throwing Up too much" >
							What can I do about the vomit everywhere.
						</Card>
					</Col>
					<Col size="md-6">
					<h3>Questions For Mama Bear</h3>
                    <Card title="Enter your question for Mama Bear Here" >	
                        <QuestionSubmit/>
                    </Card>
					</Col>
				</Row>
			</Container>	
		)
	}
}

export default ProtectedRoute
