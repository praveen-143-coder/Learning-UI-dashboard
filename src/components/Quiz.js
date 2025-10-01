import React, { useState } from "react";

function Quiz({ course, onEndQuiz }) {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (option) => {
    if (option === course.quiz[currentQ].answer) setScore(score + 1);

    if (currentQ + 1 < course.quiz.length) {
      setCurrentQ(currentQ + 1);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz-container fade-in-scale">
      <h2>{course.title} Quiz</h2>
      {!showScore ? (
        <div className="question-card">
          <p className="question">{course.quiz[currentQ].question}</p>
          <div className="options">
            {course.quiz[currentQ].options.map((opt, idx) => (
              <button key={idx} onClick={() => handleAnswer(opt)}>{opt}</button>
            ))}
          </div>
        </div>
      ) : (
        <div className="score-card">
          <h3>Your Score: {score} / {course.quiz.length}</h3>
          <button className="close-btn" onClick={onEndQuiz}>Back to Dashboard</button>
        </div>
      )}
    </div>
  );
}

export default Quiz;
