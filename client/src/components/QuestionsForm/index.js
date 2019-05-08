import React from 'react'

class QuestionsForm extends React.Component {
    //Temporarily hold the question
    form: null;
    questionElem: null;
    answerElem: null;
    responseElem: null;
    respondantsNameElem: null;

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
                        respondantsName:""
                    });
                }}
            >

            <div className="form-group">
                <input className="form-control" ref={(input) => this.questionElem = input} type='text' name='question' placeholder='Enter Your Question Here.' /><br/>  
            </div>
            </form>
        )
    }
}

export default QuestionsForm