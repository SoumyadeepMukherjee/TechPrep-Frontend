import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import QuizService from '../services/QuizService';

const QuizComponent = () => {
        
        const [Quiz, setQuiz] = useState([])

        const {cid} = useParams();

        useEffect(() => {
            getQuizzesByCategory(cid)
        }, []);

       const getQuizzesByCategory = (cid) => {

            QuizService.getQuizzesByCategory(cid).then((response) => {
            setQuiz(response.data)
            console.log(response.data);
            });
        };


return (
    <div className = "container">
        
        <h1 className = "text-center"> Exam Quiz List</h1>

        <table className = "table table-striped">
            <thead>
                <tr>
                    <th>Quiz Name</th>
                    <th>Quiz Description</th>
                    <th>Number of Questions</th>
                    <th>Maximum Marks</th>
                </tr>

            </thead>
            <tbody>
                {
                    Quiz.map(
                            quiz =>
                            <tr key = {quiz.qid}>
                                <td> {quiz.title }</td>
                                <td> {quiz.description }</td>
                                <td> {quiz.noOfQs} </td>   
                                <td> {quiz.maxMarks} </td>
                                <td><button type="button" class="btn btn-primary">Attempt</button></td>
                            </tr>

                    )
                }

            </tbody>
        </table>

    </div>
    );
}
 
export default QuizComponent;