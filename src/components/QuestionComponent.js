import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import QuestionService from "../services/QuestionService";

const QuestionComponent = () => {
  const [questions, setQuestions] = useState([]);
  const [userAnswers,setUserAnswers] = useState([]);
  const [score,setScore]=useState(0);

  const { qid } = useParams();
  const { title } = useParams();

  useEffect(() => {
    getQuestionsByQuiz(qid);
  }, [qid]);

  const getQuestionsByQuiz = (qid) => {
    QuestionService.getQuestionsByQuiz(qid)
      .then((response) => {
        setQuestions(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Failed to fetch questions:", error);
      });
  };

  const handleAnswerChange = (quesId, selectedOption) => {
    setUserAnswers((prevUserAnswers) => ({
      ...prevUserAnswers,
      [quesId]: selectedOption,
    }));
  };

  const calculateScore = () => {
    let totalScore = 0;
    questions.forEach((question) => {
      if (userAnswers[question.quesId] === question.ans) {
        totalScore += 5;
      }
      else{
        totalScore-=2;
      }
    });
    setScore(totalScore);
  };

  return (
    <div className="question">
      <h1>Questions on {title}</h1>

      {questions.length > 0 ? (
        questions.map((question) => (
          <div key={question.quesId} className="quizManualPage__content--section">
            <h4> {question.content}</h4>

            <form>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name={`question-${question.quesId}`}
                  id={`option1-${question.quesId}`}
                  value={question.option1}
                  onChange={() => handleAnswerChange(question.quesId, question.option1)}
                />
                <label className="form-check-label" htmlFor={`option1-${question.quesId}`}>
                  {question.option1}
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name={`question-${question.quesId}`}
                  id={`option2-${question.quesId}`}
                  value={question.option2}
                  onChange={() => handleAnswerChange(question.quesId, question.option2)}
                />
                <label className="form-check-label" htmlFor={`option2-${question.quesId}`}>
                  {question.option2}
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name={`question-${question.quesId}`}
                  id={`option3-${question.quesId}`}
                  value={question.option3}
                  onChange={() => handleAnswerChange(question.quesId, question.option3)}
                />
                <label className="form-check-label" htmlFor={`option3-${question.quesId}`}>
                  {question.option3}
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name={`question-${question.quesId}`}
                  id={`option4-${question.quesId}`}
                  value={question.option4}
                  onChange={() => handleAnswerChange(question.quesId, question.option4)}
                />
                <label className="form-check-label" htmlFor={`option4-${question.quesId}`}>
                  {question.option4}
                </label>
              </div>
            </form>
          </div>
        ))
      ) : (
        <p>No questions found for this quiz</p>
      )}

      <button type="button" class="btn btn-primary" onClick={calculateScore}>Submit</button>
      {score !== null && <h3>Your score: {score}</h3>}
    </div>
  );
};

export default QuestionComponent;
