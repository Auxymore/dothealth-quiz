import React from 'react';

function Result ({quizResult, answers}) {
  
  function renderQuestions(){
    return  (
        quizResult.map((_data,index) =>{
            return <div>{_data.question} <br/>You have selected {answers[index]+1} { ((answers[index]+1) === _data.answerindex) ? (<span>its correct !man</span>) : ''}</div>
        })
    )
  }
    return (
    <div>
      <div>
        <strong>Your data</strong>
        <div>{renderQuestions()}</div>
      </div>
    </div>
    )
  
}

export default Result;