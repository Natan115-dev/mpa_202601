import indexContext from './pages/index_page';
import productsContext from './pages/products_page';
import sportsContext from './pages/sports_page';
import testimonialsContext from './pages/testimonials_page';  

export default (page) => {
    switch (page) {
        case '/index.html':
            return indexContext;
        case '/productos.html':
            return productsContext;
        case '/sports.html':
            return sportsContext;
        case '/testimonios.html':                                
            return testimonialsContext;
        default:
            return {};
    }
};