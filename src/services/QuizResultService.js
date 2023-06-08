import axios from 'axios';

const QUIZ_RESULTS_API_BASE_URL = 'http://localhost:8080/question/quizresults';

class QuizResultsService {
  //To be done
  fetchQuizResults(evaluationModel) {
    return axios.post(QUIZ_RESULTS_API_BASE_URL, evaluationModel);
  }

  fetchQuizResultsByUserName(userName) {
    return axios.get(`${QUIZ_RESULTS_API_BASE_URL}/${userName}`);
  }
}

export default new QuizResultsService();
