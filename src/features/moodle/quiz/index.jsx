import React, { useState } from 'react';

const quizData = [
  {
    id: 1,
    title: "Moodle Basics Quiz",
    description: "Test your knowledge of Moodle fundamentals",
    questions: [
      {
        id: 1,
        question: "What is the first step to create a course in Moodle?",
        options: ["Add students", "Create course content", "Click 'Create New Course'", "Set up grading"],
        correct: 2
      },
      {
        id: 2,
        question: "Which role allows users to create courses in Moodle?",
        options: ["Teacher", "Student", "Course Creator", "Guest"],
        correct: 2
      },
      {
        id: 3,
        question: "What is a 'sandbox course' used for?",
        options: ["Final grading", "Practice and experimentation", "Student enrollment", "Exam creation"],
        correct: 1
      }
    ]
  }
];

const Quiz = () => {
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleAnswer = (questionId, optionIndex) => {
    if (!submitted) {
      setAnswers(prev => ({ ...prev, [questionId]: optionIndex }));
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleReset = () => {
    setAnswers({});
    setSubmitted(false);
  };

  if (!selectedQuiz) {
    return (
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">📝 Quizzes</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {quizData.map(quiz => (
            <div 
              key={quiz.id}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg cursor-pointer transition-shadow"
              onClick={() => setSelectedQuiz(quiz)}
            >
              <h3 className="text-xl font-semibold">{quiz.title}</h3>
              <p className="text-gray-600 mt-2">{quiz.description}</p>
              <p className="text-sm text-gray-400 mt-2">
                {quiz.questions.length} questions
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Quiz taking view
  const calculateScore = () => {
    let correct = 0;
    selectedQuiz.questions.forEach(q => {
      if (answers[q.id] === q.correct) correct++;
    });
    return correct;
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">{selectedQuiz.title}</h2>
        <button 
          onClick={() => setSelectedQuiz(null)}
          className="text-blue-600 hover:text-blue-800"
        >
          ← Back to Quizzes
        </button>
      </div>

      {selectedQuiz.questions.map((q, qIndex) => (
        <div key={q.id} className="bg-white p-6 rounded-lg shadow mb-4">
          <h4 className="font-semibold mb-3">
            {qIndex + 1}. {q.question}
          </h4>
          <div className="space-y-2">
            {q.options.map((option, oIndex) => (
              <label 
                key={oIndex} 
                className={`block p-3 border rounded-lg cursor-pointer transition ${
                  answers[q.id] === oIndex 
                    ? submitted 
                      ? oIndex === q.correct 
                        ? 'border-green-500 bg-green-50' 
                        : 'border-red-500 bg-red-50'
                      : 'border-blue-500 bg-blue-50'
                    : submitted && oIndex === q.correct
                    ? 'border-green-500 bg-green-50'
                    : 'border-gray-200 hover:bg-gray-50'
                }`}
              >
                <input
                  type="radio"
                  name={`question-${q.id}`}
                  checked={answers[q.id] === oIndex}
                  onChange={() => handleAnswer(q.id, oIndex)}
                  disabled={submitted}
                  className="mr-3"
                />
                {option}
                {submitted && oIndex === q.correct && (
                  <span className="ml-2 text-green-600">✅</span>
                )}
                {submitted && answers[q.id] === oIndex && oIndex !== q.correct && (
                  <span className="ml-2 text-red-600">❌</span>
                )}
              </label>
            ))}
          </div>
        </div>
      ))}

      <div className="flex gap-4">
        {!submitted ? (
          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            disabled={Object.keys(answers).length < selectedQuiz.questions.length}
          >
            Submit Quiz
          </button>
        ) : (
          <div className="w-full">
            <div className="bg-green-50 border border-green-200 p-4 rounded-lg mb-4">
              <p className="text-green-700 font-semibold">
                Score: {calculateScore()} / {selectedQuiz.questions.length}
              </p>
            </div>
            <button
              onClick={handleReset}
              className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 transition"
            >
              Retry Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;