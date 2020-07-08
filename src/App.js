import React, { Component } from 'react';
import quiz_data from './data';
import Quiz from './components/Quiz';
import Result from './components/Result';
import './App.css';
class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      allQuestions : [],
      answer: '',
      selectedAnswers : {},
      result: ''
    };
    this.setNextQuestion = this.setNextQuestion.bind(this);
    this.setPreviousQuestion = this.setPreviousQuestion.bind(this);
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
    this.viewResults = this.viewResults.bind(this);

  }
  handleAnswerSelected(e){
    var _self = this;
    var obj = _self.state.selectedAnswers;
    var index = parseInt(e.target.value);
    var Qindex = (_self.state.counter )
    // create map and store all selecred answers with quiz Questions
    obj[Qindex] = index;
    _self.setState({selectedAnswers : obj})
 }

  componentWillMount() {
    this.setState({
      question: quiz_data[0].question,
      answerOptions : quiz_data[0].answers,
      allQuestions : quiz_data
    });
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
      counter: counter,
      questionId: questionId,
      question: quiz_data[counter].question,
      answerOptions: quiz_data[counter].answers,
      answer: ''
    });
  }
  setPreviousQuestion() {
    const counter = this.state.counter - 1;
    const questionId = this.state.questionId - 1;

    this.setState({
      counter: counter,
      questionId: questionId,
      question: quiz_data[counter].question,
      answerOptions: quiz_data[counter].answers,
      answer: ''
    });
  }

  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    return answersCountKeys.filter((key) => answersCount[key] === maxAnswerCount);
  }

  setResults(result) {
    if (result.length === 1) {
      this.setState({ result: result[0] });
    } else {
      this.setState({ result: 'Undetermined' });
    }
  }

  renderQuiz() {
    return (
      <Quiz viewResults={this.viewResults}
        setNextQuestion={this.setNextQuestion}
        counter={this.state.counter}
        setPreviousQuestion={this.setPreviousQuestion}
        answer={this.state.answer}
        selectedAnswer = {this.state.selectedAnswers[this.state.counter]}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quiz_data.length}
        onAnswerSelected = {this.handleAnswerSelected}
      />
    );
  }

  renderResult() {
    return (
      <Result quizResult={this.state.allQuestions} answers={this.state.selectedAnswers} />
    );
  }
  viewResults(e){
    e.preventDefault();
    this.setState({result : true})
  }
 // decide to render result or quiz
  render() {
    return (
      <div className="App">   
        {this.state.result ? this.renderResult() : this.renderQuiz()}
      </div>

    );
  }
}

export default App;