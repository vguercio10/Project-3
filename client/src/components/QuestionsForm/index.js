import React from 'react'

class QuestionsForm extends React.Component {

    form: null;
    questionElem: null;
    answerElem: null;
    responseElem: null;
    respondantsNameElem: null;

    render() {
        const { onSubmit } = this.props;
        console.log(`Message form props are: ${JSON.stringify(this.props)}`);

        return (
            <form
                ref={(elem) => this.form = elem}
                onSubmit={(e)} => {
                    e.preventDefault();
                    return onSubmit({
                        question: this.questionElem.value,
                        answer: this.answerElem.value,
                        response: this.responseElem.value,
                        respondantsName: this.respondantsNameElem.value
                    });
                }}
            >

                <div className="form-group">
                    <input className="form-control" ref={(input)} => this.questionElem = input} type='text' name='question' placeholder='Enter Your Question Here.' /><br/>

                    
                </div>
                </form>
        )
    }


}






export default QuestionsForm