import React, { useState } from 'react';

function QuizCard({ title, questions = [] }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) setScore(score + 1);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
      <h4 className="font-semibold text-gray-800 text-lg mb-4">?? {title}</h4>
      {showScore ? (
        <div className="text-center py-4">
          <p className="text-xl font-bold text-gray-800">
            You scored {score} out of {questions.length}!
          </p>
          <button 
            onClick={() => { setCurrentQuestion(0); setScore(0); setShowScore(false); }}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Restart Quiz
          </button>
        </div>
      ) : (
        <div>
          <p className="text-gray-700 mb-4 font-medium">
            {questions[currentQuestion]?.question || "No question available"}
          </p>
          <div className="space-y-2">
            {questions[currentQuestion]?.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(index === questions[currentQuestion].correct)}
                className="w-full text-left px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded border border-gray-200 transition"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default QuizCard;
