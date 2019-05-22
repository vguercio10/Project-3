import React from "react";
import { Container, Row, Col } from "../../components/Grid";
import QuestionSubmit from "../../components/QuestionSubmit";
import userPhoto from "../../images/user-placeholder.png";
import Card from "../../components/Card";
import { ListGroup, ListGroupItem } from "reactstrap";
import Modal from "../../components/Modal";

class ProtectedRoute extends React.Component {
  state = {
    questions: [],
    openModal: false,
	questionsReady: false,
    response: "",
	showModalSubmitBtn: false,
    questionText: "",
    showingResponse: false
  };
  cancelModal = () => {
    this.setState({ openModal: false });
  };
  displayAnswer = (_id, response, userEmail) => {
    console.log(response);
    this.setState({
      openModal: true,
      response,
      userEmail,
      showingResponse: true
    });
  };
  // When page loads without event it will fetch api question data
  componentDidMount() {
    const userEmail = localStorage.getItem("userEmail");
    this.setState({ userEmail });
    fetch("/api/submit/getAnsweredQuestions", {
      method: "POST",
      body: JSON.stringify({ userEmail }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ questions: data, questionsReady: true });
        console.log(data);
      })
      .catch(err => {
        // No beuno, kick them
        console.log("Error logging in.", err);
      });
  }
  render() {
    return (
      <Container>
        <Row>
          <Col size="md-6">
            <h3>Welcome!</h3>
          </Col>
        </Row>
        <Row>
          <Col size="md-6">
            <img height="200px" src={userPhoto} />
          </Col>
        </Row>
        <Row>
          <Col size="md-6">
            <Card title="Messages With Mom">
              <ListGroup>
                {this.state.questionsReady &&
                  this.state.questions.map(
                    e =>
                      e.answer === true && (
                        <ListGroupItem
                          key={e._id}
                          tag="button"
                          action
                          onClick={() =>
                            this.displayAnswer(e._id, e.response, e.userEmail)
                          }
                        >
                          {e.question}
                        </ListGroupItem>
                      )
                  )}
              </ListGroup>
            </Card>
          </Col>
          <Col size="md-6">
            <Card title="Advice Requests">
              <QuestionSubmit />
            </Card>
          </Col>
        </Row>
        <Modal
          openModal={this.state.openModal}
          cancelModal={() => this.cancelModal()}
          response={this.state.response}
          questionText={this.state.questionText}
		  showingResponse={this.state.showingResponse}
		  showModalSubmitBtn={this.state.showModalSubmitBtn}
        />
      </Container>
    );
  }
}

export default ProtectedRoute;
