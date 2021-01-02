import React, { Component }  from 'react';

class Answers extends Component {
    checkAnswers = (e, corr) => {
        if (e.target.value === corr[0]) {
            this.props.answered(true)
        } 
    }

    render() {
        const {answerArray, correct} = this.props;
        return (
            <div className="answerContainer">
                    {answerArray.map((x, i) => {
                        return (
                        <button 
                        className="answerBtn"
                        ref={btn => {this.btn = btn}}
                        key={i}
                        value={x}
                        onClick={(e) => {
                            this.checkAnswers(e, correct)
                        }}
                        >{x}</button>
                        )
                    })}
        
            </div>
        )
    }
}

export default Answers;