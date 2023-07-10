import axios from 'axios';

const QUIZ_RESULTS_API_BASE_URL = 'http://localhost:8080/question';

class QuizResultsService {
  
  postQuizResults(scoreId,qid,score,correctAns) {
    const quizResult= {scoreId,qid,score,correctAns};
    return axios.post(`${QUIZ_RESULTS_API_BASE_URL}/scores`, quizResult);
  }

  fetchQuizResultsByUserName(userName) {
    return axios.get(`${QUIZ_RESULTS_API_BASE_URL}/${userName}/scores`);
  }
}

export default new QuizResultsService();
