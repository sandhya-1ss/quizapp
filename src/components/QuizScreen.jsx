import React, { useState, useEffect, useCallback } from "react";
import '../index.css';
const QuizScreen = ({ quizData, onComplete, initialScore }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [score, setScore] = useState(initialScore);
  const [progress, setProgress] = useState(0);
  const [badge, setBadge] = useState("");

  const handleNextQuestion = useCallback(
    (isCorrect) => {
      if (isCorrect) {
        const timeBonus = timeLeft > 5 ? 5 : 0; // Extra points for fast answers
        setScore((prevScore) => prevScore + 10 + timeBonus);
      }
      setTimeLeft(15); // Reset timer
      setProgress(((currentQuestion + 1) / quizData.length) * 100);

      // Unlock badges
      if (score >= 50) setBadge("Quiz Expert");

      if (currentQuestion === quizData.length - 1) {
        onComplete(score);
      } else {
        setCurrentQuestion((prev) => prev + 1);
      }
    },
    [currentQuestion, quizData.length, score, timeLeft, onComplete]
  );

  useEffect(() => {
    if (timeLeft === 0) {
      handleNextQuestion(false); // Automatically move to the next question when time is up
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer); // Cleanup the timer
  }, [timeLeft, handleNextQuestion]);

  return (
    <div className="quiz-screen">
      <h2>
        Question {currentQuestion + 1}/{quizData.length}
      </h2>
      <h3>{quizData[currentQuestion].question}</h3>
      <ul>
        {quizData[currentQuestion].options.map((option, index) => (
          <li
            key={index}
            onClick={() =>
              handleNextQuestion(option === quizData[currentQuestion].answer)
            }
          >
            {option}
          </li>
        ))}
      </ul>
      <p>Time Left: {timeLeft}s</p>
      <div className="progress-bar">
        <div style={{ width: `${progress}%` }} className="progress"></div>
      </div>
      {badge && <p>Badge Earned: {badge}</p>}
    </div>
  );
};

export default QuizScreen;
