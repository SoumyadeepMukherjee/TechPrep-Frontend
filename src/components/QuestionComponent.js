import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import QuestionService from "../services/QuestionService";
import QuizResultsComponent from "./QuizResultsComponent";

const QuestionComponent = () => {
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [evaluationModel, setEvaluationModel] = useState(null);
  const navigate = useNavigate();

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

  // const calculateScore = () => {
  //   let totalScore = 0;
  //   questions.forEach((question) => {
  //     if (userAnswers[question.quesId] === question.ans) {
  //       totalScore += 5;
  //     }
  //     else if (userAnswers[question.quesId] !== question.ans){
  //       totalScore-=2;
  //     }
  //   });
  //   //setScore(totalScore);

  // };

  const handleQuizSubmit = (userId) => {
    const model = {
      userId: userId,
      qid: qid,
      questions: questions.map((question) => ({
        userId: userId,
        quesId: question.quesId,
        givenAns: userAnswers[question.quesId],
      })),
    };

    setEvaluationModel(model);
    navigate(`/user/${userId}/quizresults`);
  };

  return (
    <div className="question">
      <h1>Questions on {title}</h1>

      {questions.length > 0 ? (
        questions.map((question) => (
          <div
            key={question.quesId}
            className="quizManualPage__content--section"
          >
            <h4> {question.content}</h4>

            <form className="question-list">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name={`question-${question.quesId}`}
                  id={`option1-${question.quesId}`}
                  value={question.option1}
                  onChange={() =>
                    handleAnswerChange(question.quesId, question.option1)
                  }
                />
                <label
                  className="form-check-label"
                  htmlFor={`option1-${question.quesId}`}
                >
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
                  onChange={() =>
                    handleAnswerChange(question.quesId, question.option2)
                  }
                />
                <label
                  className="form-check-label"
                  htmlFor={`option2-${question.quesId}`}
                >
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
                  onChange={() =>
                    handleAnswerChange(question.quesId, question.option3)
                  }
                />
                <label
                  className="form-check-label"
                  htmlFor={`option3-${question.quesId}`}
                >
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
                  onChange={() =>
                    handleAnswerChange(question.quesId, question.option4)
                  }
                />
                <label
                  className="form-check-label"
                  htmlFor={`option4-${question.quesId}`}
                >
                  {question.option4}
                </label>
              </div>
            </form>
          </div>
        ))
      ) : (
        <p>No questions found for this quiz</p>
      )}

      <div className="submit-button">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => handleQuizSubmit(101)}>
          Submit
        </button>
      </div>

      {/* <div className="score">
          <h4>Your Score is: {score}</h4>
        </div> */}

      {evaluationModel && (
        <QuizResultsComponent evaluationModel={evaluationModel} />
      )}
    </div>
  );
};

export default QuestionComponent;
