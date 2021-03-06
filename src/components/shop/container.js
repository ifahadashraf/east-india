import { ShopComponent } from './index';
import { connect } from 'react-redux';
import { selectCategoriesFromState, selectProductsFromState} from '../../selectors';
import { actions } from '../../actions';

const mapStateToProps = state => ({
  products: selectProductsFromState(state),
  categories: selectCategoriesFromState(state),
});

const mapDispatchToProps = {
  setProducts: actions.setProducts,
  setCategories: actions.setCategories,
};

export const Shop = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShopComponent);
