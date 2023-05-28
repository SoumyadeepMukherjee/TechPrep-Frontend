import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import QuestionService from "../services/QuestionService";

const QuestionComponent = () => {
  const [questions, setQuestions] = useState([]);

  const { qid } = useParams();

  const [Question, setQuestion] = useState(
    questions.filter((q) => q.qid === qid)[0] || null
  );

  useEffect(() => {
    if (questions.length == 0) {
      getQuestionsByQuiz(qid);
    }
  }, [qid]);

  const getQuestionsByQuiz = (qid) => {
    QuestionService.getQuestionsByQuiz(qid).then((response) => {
      setQuestion(response.data);
      console.log(response.data);
    });
  };

  return (
    <div className="question">
      <h1>Question Component</h1>

      {Question && (
        <div className="quizManualPage__content--section">
          <h3>{Question.content}</h3>
        </div>
      )}
    </div>
  );
};

export default QuestionComponent;
