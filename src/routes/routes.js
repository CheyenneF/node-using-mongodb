import { addnewProduct } from '../controllers/controllers';


const routes = (app) => {

    app.route('/products');
    app.routes.post(addnewProduct);
    
    
} ;

export default routes;
