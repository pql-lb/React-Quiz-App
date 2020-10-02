import React, { Component }  from 'react';
import Answers from './Answers';

class Question extends Component {
    state = {

    }
    render() {
        if (this.props.activeState === false) {
        return (
            <div>
                <div>
                    <p className="questionP">Please press the button to begin the game.</p>
                    <br></br>
                    <button 
                        className='mainBtn'
                        onClick={() => {
                            this.props.activity(true)
                
                            let corr_answer = this.props.question.map(x => x.correct_answer)
                            let incor_answer = this.props.question.map(x => x.incorrect_answers)
                            let answerArray = incor_answer[0]
                            let cor = corr_answer[0]
                            answerArray.push(cor)
                            for (let i = answerArray.length - 1; i > 0; i--) {
                                const j = Math.floor(Math.random() * (i + 1));
                                [answerArray[i], answerArray[j]] = [answerArray[j], answerArray[i]];
                            }    
                            this.setState({
                                answerArray: answerArray
                            })
                        }}
                    >
                        Begin
                    </button>
                </div>
            </div>
        )} else {
            const question = this.props.question.map(x => x.question)
            return (
                <div>
                    {(question)}
                    <Answers answers={this.props.question} answerArray={this.state.answerArray}/>
                </div>
            )
        }
    }
}

export default Question;