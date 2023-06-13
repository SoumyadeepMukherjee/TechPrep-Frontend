 
import React, { useState, useEffect,useRef } from "react";
import {Alert, Container } from 'react-bootstrap';
import { Link, useParams, useNavigate } from "react-router-dom";
import QuestionService from "../services/QuestionService";
import Navbar2 from "./Navbar2";
import { CountdownCircleTimer } from "react-countdown-circle-timer";


const QuestionComponent = () => {
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(null);
  const [isClicked,setIsClicked]=useState(false);
  const [minute, setMinuter] = useState(5);
  const funRef = useRef(null);
  const hourSeconds = 300;
  //const [evaluationModel, setEvaluationModel] = useState(null);
  const navigate = useNavigate();

  const { qid } = useParams();
  const { title } = useParams();
  const [disabled, setDisabled] = useState(false);

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
      } else if (userAnswers[question.quesId] !== question.ans) {
        
      }
    });
    setScore(totalScore);
    setIsClicked(!isClicked);
     setDisabled(true);
  };

  
  const renderTime = (dimension, time) => {
    return (
      <div className="time-wrapper">
        <div className="time">{time}</div>
        <div>{dimension}</div>
      </div>
    );
  };

  useEffect(() => {
    if (minute !== 0) {
      funRef.current = setTimeout(() => {
        setMinuter(minute - 1);
      }, 60000);
    } else {
      clearTimeout(funRef.current);
    }

  });

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     navigate(`/user/${userName}`)
  //   }, 60000)
  // }, [])

  const timerProps = {
    isPlaying: true,
    size: 120,
    strokeWidth: 6
  };

  // const handleQuizSubmit = (userId,userName,navigate) => {
  //   const model = {
  //     userId: userId,
  //     qid: qid,
  //     questions: questions.map((question) => ({
  //       userId: userId,
  //       quesId: question.quesId,
  //       givenAns: userAnswers[question.quesId],
  //     })),
  //   };

  //  setEvaluationModel(model);

  //navigate(`/user/${userName}`);
  //};

  return (
    <>
    <Navbar2 />

     {!isClicked && <CountdownCircleTimer
        {...timerProps}
        isPlaying
        initialRemainingTime={hourSeconds}
        duration={hourSeconds}
        colors={[["#3f51b5"]]}
        onComplete={() => console.log("times up")}
      >
        {({ elapsedTime }) => {
          //console.log(hourSeconds - elapsedTime / 1000);
          return renderTime("minute", minute);
        }}
      </CountdownCircleTimer>}

    <div className="question">
    {isClicked && <Container className='p-4'>
      <Alert variant="success">Your score is : {score}</Alert>  
    </Container> }
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
          disabled={disabled}
          className="btn btn-primary"
          onClick={calculateScore}
        >
          Submit
        </button>
      </div>

      

      {/* {score !== null && (
        <div className="score">
          alert("Your score is :",score);
        </div>
      )} */}
      
      {/* {evaluationModel && (
        <QuizResultsComponent evaluationModel={evaluationModel} />
      )} */}
    </div>
    </>
  );
};

export default QuestionComponent;
