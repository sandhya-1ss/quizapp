import React from 'react';

const ProgressBar = ({ current, total }) => (
  <div className="progress-bar">
    <div 
      style={{ width: `${(current / total) * 100}%` }} 
      className="progress-bar-fill">
    </div>
    <p>{current}/{total}</p>
  </div>
);
<div style={{ height: "10px", width: "100%", background: "#ddd" }}>
    <div
        style={{
            height: "100%",
            width: `${(timeLeft / 15) * 100}%`,
            background: "green",
            transition: "width 1s linear",
        }}
    ></div>
</div>

export default ProgressBar;
