import axios from 'axios';

const QUESTION_API_BASE_URL = 'http://localhost:8080/question';

class QuestionService{

    getQuestionsByQuiz(qid){
        return axios.get(QUESTION_API_BASE_URL+'/quiz/'+qid);
    }
}

export default new QuestionService();