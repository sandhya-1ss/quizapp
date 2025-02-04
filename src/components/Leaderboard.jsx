import React from "react";

const Leaderboard = ({ leaderboard, onBack }) => {
  return (
    <div className="leaderboard">
      <h1>Leaderboard</h1>
      <ul>
        {leaderboard.map((player, index) => (
          <li key={index}>
            {index + 1}. {player.name}: {player.score} points
          </li>
        ))}
      </ul>
      <button onClick={onBack}>Back</button>
    </div>
  );
};

export default Leaderboard;
