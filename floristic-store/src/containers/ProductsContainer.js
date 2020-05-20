import {addToFavoritesAC, removeToFavoritesAC, setProductsAC} from "../store/reducers/productsReducer";
import Products from "../components/Products/Products";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        products: state.productsPage.products
    }
};

let mapDispatchToProps = (dispatch) => {
  return {
      setProducts: (products) => {
          dispatch (setProductsAC(products))
      },
      addToFavorites: (productId) => {
          dispatch(addToFavoritesAC(productId))
      },
      removeToFavorites: (productId) => {
          dispatch(removeToFavoritesAC(productId))
      }
  }
};

export default connect(mapStateToProps, mapDispatchToProps) (Products)