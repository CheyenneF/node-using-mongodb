import { addnewProduct } from '../controllers/controllers';

import { getProducts } from '../controllers/controllers';
import { getProductWithID } from '../controllers/controllers';


const routes = (app) => {

    app.route('/products');
    app.route.get(getProducts);
    app.routes.post(addnewProduct);

    app.route('/products/:ProductID');
    app.route.get(getProductWithID);
    
    
} ;

export default routes;
