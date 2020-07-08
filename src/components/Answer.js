import React from 'react';

function AnswerOption(props) {

  return (
    <div>
      <button
        type="button"
        id={props.answerType}
        value={props.index}
        className={(props.selectedAnswer === props.index) ? 'selected-btn' : 'unselected-btn' }
        onClick={props.onAnswerSelected}
      >{props.answerContent}</button>
    </div>
  );

}

export default AnswerOption;