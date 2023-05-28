import React, { useState, useEffect } from "react";
import { useParams,useNavigate, Link } from "react-router-dom";
import QuizService from "../services/QuizService";

const QuizDetails = () => {
  const navigate = useNavigate();

  const [quizzes, setQuizzes] = useState([]);
  const { qid } = useParams();

  const [quiz, setQuiz] = useState(
    quizzes.filter((q) => q.qid === qid)[0] || null
  );

  const startQuizHandler = (quizTitle, quizId) => {
    navigate(`/questions/${quizId}/${quizTitle}`);
  };

  useEffect(() => {
    if (quizzes.length == 0) {
      getQuizByQuizId(qid);
    }
  }, [qid]);

  const getQuizByQuizId = (qid) => {
    QuizService.getQuizByQuizId(qid).then((response) => {
      console.log(response.data);
      setQuiz(response.data);
    });
  };

  return (
    <div className="quiz-details">
      <h2>Quiz Details</h2>

      <div className="quiz-manual">
        <div className="quizManualPage__content--section">
          <h5>Read the instruction of this page carefully before you proceed</h5>
        </div>

        {quiz && (
          <div className="quizManualPage__content--section">
            <h3>{quiz.title}</h3>
            <p>{quiz.description}</p>
          </div>
        )}

        <hr />

        <div className="quizManualPage__content--section">
          <h3>Important Instructions</h3>
          <ul>
            <li>This quiz is only for practice purpose.</li>
            <li>
              You have to submit quiz within <strong>10 minutes</strong>.
            </li>
            <li>You can attempt the quiz any number of time.</li>
            {quiz && (
              <>
                <li>
                  There are <strong>{quiz.noOfQs} questions</strong> in this
                  quiz.
                </li>
                <li>
                  Total Marks for this quiz is <strong>{quiz.maxMarks}.</strong>
                </li>
              </>
            )}
            <li>All question is of MCQ type.</li>
          </ul>
        </div>

        <div>
            <h3>Attempting Quiz</h3>
            <ul>
              <li>
                Click <strong>Start Quiz</strong> button to start the quiz.
              </li>
              <li>
                The timer will start the moment, you will click on the Start
                Quiz button.
              </li>
              <li>
                Click on <strong>Submit Quiz</strong> button on completion of
                the quiz.
              </li>
            </ul>
          </div>

          
          <button class="btn btn-primary" onClick={() => startQuizHandler(quiz.title, quiz.qid)}>Start Quiz</button>
      </div>
    </div>
  );
};

export default QuizDetails;
