import axios from 'axios';

const QUIZ_RESULTS_API_BASE_URL = 'http://localhost:8080/question/quizresults';

class QuizResultsService {
  fetchQuizResults(evaluationModel) {
    return axios.post(QUIZ_RESULTS_API_BASE_URL, evaluationModel);
  }
}

export default new QuizResultsService();
