import React, { useState } from "react";
import CourseCard from "./components/CourseCard";
import CourseDetail from "./components/CourseDetail";
import Quiz from "./components/Quiz.js";
import "./App.css";

function App() {
  const courses = [
    {
      id: 1,
      title: "React Basics",
      shortDesc: "Learn the fundamentals of React.",
      fullDesc: "Dive deep into React basics, including components, JSX, props, state, and hooks. Perfect for beginners.",
      quiz: [
        { question: "What is JSX?", options: ["HTML", "JavaScript XML", "JSON"], answer: "JavaScript XML" },
        { question: "What hook is used for state?", options: ["useEffect", "useState", "useReducer"], answer: "useState" },
      ],
    },
    {
      id: 2,
      title: "JavaScript Advanced",
      shortDesc: "Master advanced JavaScript concepts.",
      fullDesc: "Understand closures, async/await, promises, event loops, and modern ES6+ features to level up your JS skills.",
      quiz: [
        { question: "What does 'closure' mean?", options: ["A function inside a function", "Variable scope", "Promise"], answer: "A function inside a function" },
        { question: "Async/await is used for?", options: ["Sync code", "Async code", "Loops"], answer: "Async code" },
      ],
    },
    {
      id: 3,
      title: "CSS & Flexbox",
      shortDesc: "Design responsive layouts.",
      fullDesc: "Learn CSS styling, Flexbox, Grid, media queries, and how to make responsive and professional-looking web pages.",
      quiz: [
        { question: "Flexbox is used for?", options: ["Layout", "Color", "Animation"], answer: "Layout" },
        { question: "Which property aligns items vertically?", options: ["justify-content", "align-items", "flex-wrap"], answer: "align-items" },
      ],
    },
  ];

  const [selectedCourse, setSelectedCourse] = useState(null);
  const [quizCourse, setQuizCourse] = useState(null);

  const handleCourseClick = (course) => setSelectedCourse(course);
  const handleClose = () => setSelectedCourse(null);
  const handleStartQuiz = (course) => {
    setQuizCourse(course);
    setSelectedCourse(null);
  };
  const handleEndQuiz = () => setQuizCourse(null);

  return (
    <div className="app">
      <h1 className="fade-in">Learning Dashboard</h1>

      {!selectedCourse && !quizCourse && (
        <div className="course-grid">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} onClick={() => handleCourseClick(course)} />
          ))}
        </div>
      )}

      {selectedCourse && (
        <CourseDetail course={selectedCourse} onClose={handleClose} onStartQuiz={() => handleStartQuiz(selectedCourse)} />
      )}

      {quizCourse && <Quiz course={quizCourse} onEndQuiz={handleEndQuiz} />}
    </div>
  );
}

export default App;
