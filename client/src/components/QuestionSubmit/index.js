import React from 'react';
import QuestionsForm from "../RegisterForm";
//the component for submitting a question to the mom dashboard
class QuestionSubmit extends React.Component {
	state = {
		redirectToReferrer: false
	}