import React from "react";

function CourseCard({ course, onClick }) {
  return (
    <div className="course-card fade-in-up" onClick={onClick}>
      <h2>{course.title}</h2>
      <p>{course.shortDesc}</p>
    </div>
  );
}

export default CourseCard;
