import axios from 'axios';

const CATEGORY_API_BASE_URL = 'http://localhost:8080/category';

class CategoryService{

    getCategories(){
        return axios.get(CATEGORY_API_BASE_URL+'/viewcategories');
    }
}

export default new CategoryService();