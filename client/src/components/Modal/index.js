import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label,
  FormGroup
} from "reactstrap";

class AnswerModal extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       modal: false
  //     };

  //     this.toggle = this.toggle.bind(this);
  //   }

  //   toggle() {
  //     this.setState(prevState => ({
  //       modal: !prevState.modal
  //     }));
  //   }

  render() {
    return (
      <div>
        {/* <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button> */}
        <Modal
          isOpen={this.props.openModal}
          // toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader>
            {this.props.showingResponse ?  "Answer": "Question"}
          </ModalHeader>
          <ModalBody>
            {/* If question is showing  */}
            {
              !this.props.showingResponse && 
              <FormGroup>

              <Label for="exampleText">{this.props.questionText}</Label>
              <Input
                type="textarea"
                name="answer"
                value={this.props.response}
                onChange={this.props.onChange}
              />
            </FormGroup>
            }
            {/* If answer is showing */}
            {
              this.props.showingResponse &&
              <p>{this.props.response}</p>
            }
          </ModalBody>
          <ModalFooter>
            {
              this.props.showModalSubmitBtn &&
              <Button color="primary" onClick={this.props.saveResponse}>
              Submit Answer
            </Button>
            }
           
            <Button color="secondary" onClick={this.props.cancelModal}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AnswerModal;
