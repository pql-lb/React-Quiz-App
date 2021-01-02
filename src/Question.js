import React, { Component }  from 'react';
import Answers from './Answers';
import Loader from 'react-loader-spinner'

class Question extends Component {
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
                            
                        }}
                    >
                        Begin
                    </button>
                </div>
            </div>
        )} else {
            const {question, answered, correct, answerArray, overlay} = this.props
            return (
                <div>
                <div className="counter">{this.props.count}</div>
                <div className="theQuestionContainer">
                    <div className="theQuestion">
                        {overlay === false &&
                        (question)
                        }
                    </div>
                    {overlay === false &&
                    <Answers answered={answered} correct={correct} answerArray={answerArray}/>
                    }
                    {overlay === true &&
                    <div className="top">
                        <Loader type="ThreeDots" color="#FFFF" height={200} width={200} />
                    </div>
                    }
                </div>
                </div>
            )
        }
    }
}

export default Question;