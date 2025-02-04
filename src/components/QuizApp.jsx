import React, { useState, useEffect } from "react";

const QuizApp = () => {
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=10&type=multiple")
            .then((response) => response.json())
            .then((data) => {
                setQuestions(data.results);
                setLoading(false);
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {questions.map((q, index) => (
                        <li key={index}>
                            <h4>{q.question}</h4>
                            <ul>
                                {q.incorrect_answers.concat(q.correct_answer).map((option, idx) => (
                                    <li key={idx}>{option}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default QuizApp;
