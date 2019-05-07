import React from 'react';
import QuestionsForm from '../QuestionsForm';
//the component for submitting a question to the mom dashboard
class QuestionSubmit extends React.Component {

		question: "",
		answer: "",
		response: "",
		respondantsName: ""
	}
	handleInputChange = event => {
		// Getting the value and name of the input which triggered the change
		const { question, answer, response, respondantsName } = event.target;
	
		// Updating the input's state
		this.setState({
		  [question]: value,
		  [answer]: value,
		  [response]: value,
		  [respondantsName]: value
		});
	  };

	handleFormSubmit = event => {

		event.preventDefault();

		fetch('/api/submit/questionsave', {
			method: 'POST',
			body: JSON.stringify(data),
		}).then((response) => {
			if (response.status === 200) {
				console.log('Succesfully registered user!');
			}
		})
		.catch((err) => {
			console.log('Error registering user.', err);
		});
	}



}
export default QuestionSubmit

