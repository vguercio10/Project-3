import React from "react";
import { Container, Row, Col } from "../../components/Grid";
import userPhoto from "../../images/user-placeholder.png";
import Card from "../../components/Card";
import { ListGroup, ListGroupItem } from "reactstrap";
import Modal from "../../components/Modal"

/*ToDo*/
/**.
 * Let's get some styling in here
 */

/* This is a very simple component.. it probably doesn't need to be a smart component at this point but you never know what's goingto happen in the future */
class ProtectedRoute extends React.Component {
  state = {
    questions: [],
	questionsReady: false,
	openModal: false,
	response: "",
	questionText: "",
  showingResponse: false,
  showModalSubmitBtn: false
  };

  // When page loads without event it will fetch api question data
  componentDidMount() {
	const userEmail = localStorage.getItem("userEmail")
    this.setState({userEmail})
    fetch("/api/submit/getAllQuestions")
      .then(x => x.json())
      .then(data => {
        // console.log(data)
        if (data) {
          this.setState({
            questions: data,
            questionsReady: true
          });
        }
      });
  }
respondToQuestion=(questionId, questionText) => {
	this.setState({
		openModal:true,
		questionId,
		questionText,
    showingResponse:false,
    showModalSubmitBtn: true
	})
}
displayAnswer=(_id, response, userEmail) => {
	console.log(response)
	this.setState({
		openModal:true,
		response,
		userEmail,
		showingResponse: true,
    showModalSubmitBtn: false
	})
}
cancelModal=() => {
	this.setState({openModal:false})
}
saveResponse=() => {
	
	const {questionId, userEmail, response} = this.state
	
	fetch('/api/submit/responsesave', {
		method: 'POST',
		body: JSON.stringify({questionId, userEmail, response}),
		headers: {
			'Content-Type': 'application/json'
		},
	})
	.then((response) => 
		response.json()
	)
	.then(data => {
		this.setState({questions: data})
	})
	.catch((err) => {// No beuno, kick them
		console.log('Error logging in.', err);
	});
	this.setState({openModal:false})

}
handleChange=(event) => {
    this.setState({response: event.target.value});
  }
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
            <img height="200px" src={userPhoto} />
          </Col>
        </Row>
        <Row>
          <Col size="md-6">
            <Card title="Bulletin Board">
			{/* Loop through the questions and if they have not been answered, the questions will dynamically display in a list */}
              <ListGroup >
                {this.state.questionsReady &&
                  this.state.questions.map(
                    e =>
                      e.answer === false && (
						<ListGroupItem 
							key={e._id} 
							tag="button" 
							action 
							onClick= {()=> this.respondToQuestion(e._id, e.question)}
						>
                          {e.question}
                        </ListGroupItem>
                      )
                  )}
              </ListGroup>
            </Card>
          </Col>
          <Col size="md-6">
            <Card title="Answered Questions">
			<ListGroup>
                {this.state.questionsReady &&
                  this.state.questions.map(
                    e =>
                      e.answer === true && (
						<ListGroupItem 
							key={e._id} 
							tag="button" 
							action
							onClick= {()=> this.displayAnswer(e._id, e.response, e.userEmail)}
							>
                          {e.question}
                        </ListGroupItem>
                      )
                  )}
              </ListGroup>
            </Card>
          </Col>
        </Row>
		<Modal 
			openModal={this.state.openModal}
			cancelModal={()=> this.cancelModal()}
			saveResponse={()=> this.saveResponse()}
			response={this.state.response}
			onChange={this.handleChange}
			questionText={this.state.questionText}
      showingResponse={this.state.showingResponse}
      showModalSubmitBtn={this.state.showModalSubmitBtn}
		/>
      </Container>
    );
  }
}

export default ProtectedRoute;
