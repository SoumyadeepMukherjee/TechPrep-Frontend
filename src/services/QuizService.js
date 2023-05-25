import axios from 'axios';

const QUIZ_API_BASE_URL = 'http://localhost:8080/quiz';

class QuizService{

    // getQuizzes(){
    //     return axios.get(CATEGORY_API_BASE_URL+'/viewquizzes');
    // }

    getQuizzesByCategory(cid){
        return axios.get(QUIZ_API_BASE_URL+'/viewquizbycategory/'+cid);
    }
}

export default new QuizService();