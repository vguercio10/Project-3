import React from 'react';
import QuestionsForm from '../QuestionsForm';
//the component for submitting a question to the mom dashboard
class QuestionSubmit extends React.Component {

	//This is the fucntion to hit the route with the data
	submitQuestion = (data) => {
		console.log(data)
		fetch('/api/submit/questionsave', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		.then((response) => {
			if (response.status === 200) {
				console.log('Succesfully asked a question!');
			}
		})
		.catch((err) => {
			console.log('Error registering user.', err);
		});
		
	  };
		
	render() {
		return (
			<div>
				{/* This is the actual component */}
				< QuestionsForm submitQuestion={this.submitQuestion} />
				
			</div>
		)
	}
	
}//end of the class




export default QuestionSubmit;

