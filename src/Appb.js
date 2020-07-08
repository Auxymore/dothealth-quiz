import React, { Component, useState, useEffect } from 'react';
import quiz_data from './data';
import Quiz from './components/Quiz';
import Result from './components/Result';
import './App.css';
function App (){

  const [state, setState] = useState({
    counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      allQuestions : [],
      answer: '',
      selectedAnswers : {},
      result: ''
  })

  function handleAnswerSelected(event){
  
    var obj = state.selectedAnswers;
    var index = parseInt(event.target.value);
    console.log("for selected question number " + (state.counter + 1) +  " answer is " + index + " selected");
    var Qindex = (state.counter )
    // create map and store all selected answers with quiz Questions
    obj[Qindex] = index;
    setState({selectedAnswers : obj})
 }
 useEffect(() => {
  setState({
    question: quiz_data[0].question,
    answerOptions : quiz_data[0].answers,
    allQuestions : quiz_data
  });
   
 }, []);

  function setNextQuestion() {
    const counter = state.counter + 1;
    const questionId = state.questionId + 1;
    setState({
      counter: counter,
      questionId: questionId,
      question: quiz_data[counter].question,
      answerOptions: quiz_data[counter].answers,
      answer: ''
    });
  }

  function setPreviousQuestion() {
    const counter = state.counter - 1;
    const questionId = state.questionId - 1;
    setState({
      counter: counter,
      questionId: questionId,
      question: quiz_data[counter].question,
      answerOptions: quiz_data[counter].answers,
      answer: ''
    });
  }

  function getResults() {
    const answersCount = state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    return answersCountKeys.filter((key) => answersCount[key] === maxAnswerCount);
  }

  function setResults(result) {
    if (result.length === 1) {
      setState({ result: result[0] });
    } else {
      setState({ result: 'Undetermined' });
    }
  }

  function viewResults(e){
    e.preventDefault();
    setState({result : true})
  }
    return (
      <div className="App">  
      {state.result ? 
      <Quiz 
        viewResults={viewResults}
        setNextQuestion={setNextQuestion}
        counter={state.counter}
        setPreviousQuestion={setPreviousQuestion}
        answer={state.answer}
        selectedAnswer = {state.selectedAnswers[state.counter]}
        answerOptions={state.answerOptions}
        questionId={state.questionId}
        question={state.question}
        questionTotal={quiz_data.length}
        onAnswerSelected = {handleAnswerSelected}
      />
      :
      <Result 
        quizResult={state.allQuestions} 
        answers={state.selectedAnswers} />
      }
      </div>
    );
  }



export default App;