import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import QuizResultsService from '../services/QuizResultService';

const QuizResultsComponent = () => {
  const location = useLocation();
  const { userName } = useParams();

  const [quizResults, setQuizResults] = useState([]);

  useEffect(() => {
    fetchQuizResultsByUserName();
  }, []);

  const fetchQuizResultsByUserName = () => {
    QuizResultsService.fetchQuizResultsByUserName(userName)
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
              <p>Date: {result.examDate}</p>
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
