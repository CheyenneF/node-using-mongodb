import { addnewProduct } from '../controllers/controllers';

import { getProducts } from '../controllers/controllers';

const routes = (app) => {

    app.route('/products');
    app.route.get(getProducts);
    app.routes.post(addnewProduct);
    
    
} ;

export default routes;
