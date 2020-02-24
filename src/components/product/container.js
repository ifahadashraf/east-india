import { ProductComponent } from './index';
import { connect } from 'react-redux';
import {selectCartFromLocalStorage, selectProductsFromState} from '../../selectors';

const mapStateToProps = () => ({
  cart: selectCartFromLocalStorage(),
});

const mapDispatchToProps = {
};

export const Product = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductComponent);
