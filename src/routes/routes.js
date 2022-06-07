import { addnewProduct } from '../controllers/controllers';

import { getProducts } from '../controllers/controllers';
import { getProductWithID } from '../controllers/controllers';
import { updateProduct } from '../controllers/controllers';
import { deleteProduct } from '../controllers/controllers';




const routes = (app) => {

    app.route('/products');
    app.route.get(getProducts);
    app.routes.post(addnewProduct);

    app.route('/products/:ProductID');
    app.route.get(getProductWithID);
    app.route.put(updateProduct);
    app.route.delete(deleteProduct);
    
    
} ;

export default routes;
