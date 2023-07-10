import React, { useState, useEffect } from 'react'
import CategoryService from '../services/CategoryService';
import { Link } from 'react-router-dom';
import javaf from '../img/javaf.jpg'

function CategoryComponent() {

    const [Category, setCategory] = useState([])

    useEffect(() => {
        document.title = "TechPrep || Categories"
        getCategories()
    }, [])

    const getCategories = () => {

        CategoryService.getCategories().then((response) => {
            setCategory(response.data)
            console.log(response.data);
        });
    };


    return (
        <div className="container">

            <h1 className="text-center"> Exams List</h1>

            {Category.map(category => {
                return (
                    <div className="row" style={{display:"inline-block" }}>
                        <div className="col-md-6 sm-6 p-4" style={{width:"18rem"}}>
                            <div className="card">
                                <img className="card-img-top" src={javaf} alt="" />

                                <div className="card-body">
                                    <h5 className="card-title">{category.title}</h5>
                                    <p className="card-text">
                                        {category.description}
                                    </p>

                                    <Link to={`/viewquizbycategory/${category.cid}`} className="btn btn-primary" >Attempt</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            })}
        </div>

    )
}

export default CategoryComponent