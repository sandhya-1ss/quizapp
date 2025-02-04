import React from 'react';

const QuestionCard = ({ question, onAnswer }) => {
  if (!question || !question.text) {
    return <p>Question not available</p>;
  }

  return (
    <div className="question-card">
      <h2>{question.text}</h2>
      <div className="options">
        {question.options.map((option, index) => (
          <button 
            key={index} 
            onClick={() => onAnswer(option.isCorrect)}>
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
