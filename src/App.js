import React, { Component }  from 'react';
import './App.css';
import Question from './Question';

class App extends Component {
  state = {
    questionActive: false,
    count: 0,
    overlay: false
  }
  componentDidMount(){
    fetch('https://opentdb.com/api.php?amount=1')
        .then(res  => res.json())
        //Remove
        .then(res => {
          return res 
        })
        .then(res => {
          this.setState({
            correct: res.results.map(x => x.correct_answer),
            incorrect: res.results.map(x => x.incorrect_answers),
            question: res.results[0].question
          })
        })
        .then(res => {
            this.generateQuestion()
        })
  }
  generateQuestion = () => {
    let corr_answer = this.state.correct
    let incor_answer = this.state.incorrect
    let answerArray = incor_answer[0]
    let cor = corr_answer[0]
    answerArray.push(cor)
    //Randomizer
    for (let i = answerArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [answerArray[i], answerArray[j]] = [answerArray[j], answerArray[i]];
    }    
    this.setState({
        answerArray: answerArray
    })    
  }

  determineActive = (active) => {
    this.setState(() => ({
      questionActive: active
    }))
  }

  answered = (state) => {
    if (state === true) {
      this.setState((prev) => ({
        count: prev.count + 1,
        overlay: true
      }))
      this.componentDidMount()
      setTimeout(() => {
        this.setState({overlay: false})
    }, 2500)
    }
  }

  render() {
      return (
        <div className="App">

          {this.state.answerArray !== undefined &&
            <Question 
            count={this.state.count}
            activeState={this.state.questionActive} 
            activity={this.determineActive}
            question={this.state.question}
            correct={this.state.correct}
            answered={this.answered}
            answerArray={this.state.answerArray}
            overlay={this.state.overlay}
            />
          }

        </div>
      );
  }
}

export default App;
