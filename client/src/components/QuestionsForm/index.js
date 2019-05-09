import React from 'react'
import "./style.css";

class QuestionsForm extends React.Component {
    //Temporarily hold the question
    state = {
        userEmail:""
    }
    
    form: null;
    questionElem: null;
    answerElem: null;
    responseElem: null;
    respondantsNameElem: null;
    
    componentDidMount() {
    
    const userEmail = localStorage.getItem("userEmail")
    this.setState({userEmail})
}
    render() {
        const { submitQuestion } = this.props;
        console.log(`Message from props are: ${JSON.stringify(this.props)}`);

        return (
            <form
                ref={(elem) => this.form = elem}
                onSubmit={(e) => {
                    e.preventDefault();
                    return submitQuestion({
                        question: this.questionElem.value,
                        answer: false,
                        response: "",
                        respondantsName:"",
                        userEmail: this.state.userEmail,
                    });
                }}
            >

            <div className="form-group">
                <input className="form-control" ref={(input) => this.questionElem = input} type='text' name='question' placeholder='Enter Your Question Here.' /><br/>  
                <button type="submit">Submit</button>
            </div>
            </form>
        )
    }
}

export default QuestionsForm