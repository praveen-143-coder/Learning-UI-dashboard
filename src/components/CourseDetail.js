import React from "react";

function CourseDetail({ course, onClose, onStartQuiz }) {
  return (
    <div className="course-detail-overlay">
      <div className="course-detail fade-in-scale">
        <h2>{course.title}</h2>
        <p>{course.fullDesc}</p>
        <div className="buttons">
          <button className="start-quiz" onClick={onStartQuiz}>Start Quiz</button>
          <button className="close-btn" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default CourseDetail;
