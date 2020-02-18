import { ShopComponent } from './index';
import { connect } from 'react-redux';
import { selectProductsFromState } from '../../selectors';

const mapStateToProps = state => ({
  products: selectProductsFromState(state),
});

export const Shop = connect(
  mapStateToProps,
  null,
)(ShopComponent);
