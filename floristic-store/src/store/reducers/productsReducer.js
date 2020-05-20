const SET_PRODUCTS = 'SET_PRODUCTS';
const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
const REMOVE_FROM_FAVORITES = 'NOT_FAVORITES';

let initialState = {
    products: {
        roses: [
            {
                id:1,
                title: 'Роза',
                type: 'Forever Young',
                category: 'с длинным стеблем',
                width: 100,
                unit: 'см',
                price: 200.00,
                currency: '₽',
                quantity: 1,
                description: 'Бутоны махровые, бархатистые, в среднем их диаметр составляет 10 сантиметров '
            }
        ]
    }
};

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS: {
            return {...state, products: [...state.products, action.products]}
        }
        case ADD_TO_FAVORITES: {
            return {
                ...state,
                products: state.products.map(p => {
                    if (p.id === action.productId) {
                        return {...p, favorites: true}
                    }
                    return p;
                })
            }
        }
        case REMOVE_FROM_FAVORITES: {
            return {
                ...state,
                products: state.products.map(p => {
                    if (p.id === action.productId) {
                        return {...p, favorites: false}
                    }
                    return p;
                })
            }
        }
        default:
            return state;
    }
};
export  const setProductsAC = (products) => ({type: 'SET_PRODUCTS', products});
export  const addToFavoritesAC = (productId) => ({type: 'ADD_TO_FAVORITES', productId});
export  const removeToFavoritesAC = (productId) => ({type: 'REMOVE_FROM_FAVORITES', productId});

export default productsReducer;