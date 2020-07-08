import React from 'react';
import Question from '../components/Question';
import Answer from '../components/Answer';

function Quiz(props) {

  function renderAnswerOptions(key,index) {
    return (
      <Answer
        index ={index}
        key={key.content}
        answerContent={key.content}
        answerType={key.type}
        answer={props.answer}
        questionId={props.questionId}
        selectedAnswer={props.selectedAnswer}
        onAnswerSelected={props.onAnswerSelected}
      />
    );
  }
  return (
      <div key={props.questionId}>
        

        <Question content={props.question} />
        <ul>
          {props.answerOptions.map(renderAnswerOptions)}
        </ul>
        <div>
          {props.counter > 0 ? (<button className="previous-btn" onClick={props.setPreviousQuestion} >Previous</button>) : (<div></div>)}
          {props.counter < 4 ? (<button className="next-btn" onClick={props.setNextQuestion} >Next</button>) : (<button className="selected-btn" onClick={props.viewResults}>Submit</button>) }      
      </div>
      </div>
  );
}

export default Quiz;