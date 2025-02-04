import React from "react";

const ResultScreen = ({ score, leaderboard, onRestart, onViewLeaderboard }) => {
  return (
    <div className="result-screen">
      <h1>Quiz Completed!</h1>
      <p>Your Score: {score}</p>
      <button onClick={onRestart}>Restart Quiz</button>
      <button onClick={onViewLeaderboard}>View Leaderboard</button>
    </div>
  );
};

export default ResultScreen;
