import React from "react";

const StartScreen = ({ onStart }) => {
  return (
    <div className="start-screen">
      <h1>Quiz Master</h1>
      <p>Welcome! Test your knowledge and have fun.</p>
      <button onClick={onStart}>Start Quiz</button>
    </div>
  );
};

export default StartScreen;
