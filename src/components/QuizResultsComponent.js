import React, { useEffect, useState } from 'react';
import QuizResultsService from '../services/QuizResultService';

const QuizResultsComponent = ({ evaluationModel}) => {
  const [quizResults, setQuizResults] = useState([]);

  useEffect(() => {
    fetchQuizResults();
  }, []);

  const fetchQuizResults = () => {
    QuizResultsService.fetchQuizResults(evaluationModel)
      .then(response => {
        setQuizResults(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Failed to fetch quiz results:', error.response);
      });
  };

  return (
    <div>
      <h2>Quiz Results</h2>
      {quizResults.length > 0 ? (
        <ul>
          {quizResults.map((result, index) => (
            <li key={index}>
              <p>Date: {result.date}</p>
              <p>Time: {result.time}</p>
              <p>Score: {result.score}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No quiz results found</p>
      )}
    </div>
  );
};

export default QuizResultsComponent;
