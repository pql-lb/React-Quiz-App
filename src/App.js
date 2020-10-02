import React, { Component }  from 'react';
import './App.css';
import Question from './Question';

class App extends Component {
  state = {
    questionActive: false
  }

  componentDidMount(){
    fetch('https://opentdb.com/api.php?amount=1')
        .then(res  => res.json())
        .then(res => {
          //console.log(res.results.map(x => x.question)) 
          return res 
        })
        .then(res => {
          this.setState({
            apiQuestions: res.results
          })
        })
  }

  determineActive = (active) => {
    this.setState(() => ({
      questionActive: active
    }))
  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
        <Question 
        activeState={this.state.questionActive} 
        activity={this.determineActive}
        question={this.state.apiQuestions}
        />


      </header>
    </div>
  );
  }
}

export default App;
