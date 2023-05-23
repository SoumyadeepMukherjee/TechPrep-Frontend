import React, {useState, useEffect} from 'react'
import CategoryService from '../services/CategoryService';

function CategoryComponent() {

    const [category, setCategory] = useState([])

    useEffect(() => {
        getCategories()
    }, [])

    const getCategories = () => {

        CategoryService.getCategories().then((response) => {
            setCategory(response.data)
            console.log(response.data);
        });
    };

    return (
        <div className = "container">
            
            <h1 className = "text-center"> Exam Category List</h1>

            <table className = "table table-striped">
                <thead>
                    <tr>
                        
                        <th>Category Name</th>
                        <th>Category Description</th>
                    </tr>

                </thead>
                <tbody>
                    {
                        category.map(
                                category =>
                                <tr key = {category.cid}>
                                    
                                    <td> {category.title }</td>
                                    <td> {category.description }</td>   
                                    <td><button type="button" class="btn btn-primary">Attempt</button></td>
                                </tr>

                        )
                    }

                </tbody>
            </table>

        </div>
    )
}

export default CategoryComponent