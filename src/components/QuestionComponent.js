 import React, { useState, useEffect,useRef } from "react";
import {Alert, Container } from 'react-bootstrap';
import { Link, useParams, useNavigate } from "react-router-dom";
import QuestionService from "../services/QuestionService";
import Navbar2 from "./Navbar2";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import QuizResultService from "../services/QuizResultService";
import DateObject from "react-date-object";
import $ from 'jquery'


const QuestionComponent = () => {
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(null);
  const [scoreId,setScoreId]= useState(0);
  const [time,setTime] = useState(120);
  const [correctAns,setCorrectAns]=useState(0);
  const[screen,setScreen]= useState(false)

  const [isClicked,setIsClicked]=useState(false);
  const [minute, setMinuter] = useState(4);
  const [seconds,setSeconds]=useState(59);
  const funRef = useRef(null);
  const hourSeconds = 300;
  //const [evaluationModel, setEvaluationModel] = useState(null);
  const navigate = useNavigate();

  const { qid } = useParams();
  const { title } = useParams();
  const [disabled, setDisabled] = useState(false);
  const currentTime=new Date().toLocaleTimeString();
  const currentDate = new Date().toLocaleDateString();

  const finalDate= currentDate+" "+ currentTime+"hours";

 
  
  useEffect(() => {
    document.title = "TechPrep || Quiz"
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
  
  const autoSubmit=()=>{
    let totalScore = 0,c=0,s=0;
    questions.forEach((question) => {
      if (userAnswers[question.quesId] === question.ans) {
        totalScore += 5;
        c+=1;
      } 
    });
    
    s+=1;
    
    //const currentTime=new Date().toLocaleTimeString();
    // var date=new DateObject();
    // date.format("YYYY/MM/DD hh:mm:ss");
    // console.log(date);
    setScoreId(s);
    setScore(totalScore);
    setCorrectAns(c);
    setIsClicked(!isClicked)
    setDisabled(true);
    
    postQuizResult(scoreId,qid,totalScore,c);

    

    function myUrl()
    {
      document.location.href=`http://localhost:3000/viewquizdetails/${qid}`;
    }

    setTimeout(myUrl,9000);
  

    //let myDocument = document.documentElement;
    // if(document.exitFullscreen)
    // {
    //   document.exitFullscreen();
    // }
  }
  setTimeout(autoSubmit,5000*12*5)

  
  const calculateScore = () => {
    let totalScore = 0,c=0,s=0;
    questions.forEach((question) => {
      if (userAnswers[question.quesId] === question.ans) {
        totalScore += 5;
        c+=1;
      } 
    });
    
    s+=1;
    
    //const currentTime=new Date().toLocaleTimeString();
    // var date=new DateObject();
    // date.format("YYYY/MM/DD hh:mm:ss");
    // console.log(date);
    setScoreId(s);
    setScore(totalScore);
    setCorrectAns(c);
    setIsClicked(!isClicked);
    setDisabled(true);
    
    postQuizResult(scoreId,qid,totalScore,c);

    setTimeout(myUrl,3000);

    function myUrl()
    {
      document.location.href=`http://localhost:3000/viewquizdetails/${qid}`;
    }
     
    //let myDocument = document.documentElement;
    if(document.exitFullscreen)
    {
      document.exitFullscreen();
    }
  }





  const postQuizResult = (scoreId,qid,score,correctAns,time) =>{
    
    try {
      const response=QuizResultService.postQuizResults(scoreId,qid,score,correctAns,time);
      response.then((res) => {
        if (res.status === 200) {
          console.log("Score is sent!");
        }
      });
    } 
    catch (error) {
      console.error('Failed',error);
    }
    
  }

  
  const renderTime = (time) => {
    const minutes = Math.floor(time / 60).toString().padStart(2, "0");
    const seconds = (time % 60).toString().padStart(2, "0");
    return (
      <div className="time-wrapper">
        <div className="time">{`${minutes}:${seconds}`}</div>
      </div>
    );
  };

  useEffect(() => {
    if (minute !== 0 || seconds !== 0) {
      funRef.current = setTimeout(() => {
        if (seconds === 0) {
          if (minute === 0) {
            clearTimeout(funRef.current);
            // Timer has reached 0:00
            // Perform any necessary actions here
          } else {
            setSeconds(59);
            setMinuter((prevMinute) => prevMinute - 1);
            
          }
        } else {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }
      }, 1000);
    } else {
      clearInterval(funRef.current);
    }
    return () => clearInterval(funRef.current); // Cleanup interval on component unmount
  }, [minute, seconds]);

  const timerProps = {
    isPlaying: true,
    size: 120,
    strokeWidth: 6
  };
  

  return (
    <>
    <Navbar2 />
 <div style={{overflowX:'hidden'}}>
    <div className="timer" >
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
          return renderTime(minute * 60 + seconds);
        }}
      </CountdownCircleTimer>}
    </div>
     

    <div className="question">
    {isClicked && <Container className='p-5 mt-5'>
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
    </div>
    </>
  );
};

export default QuestionComponent;
