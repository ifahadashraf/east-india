import { ProductComponent } from './index';
import { connect } from 'react-redux';
import { selectProductsFromState } from '../../selectors';

const mapStateToProps = state => ({
  products: selectProductsFromState(state),
});

const mapDispatchToProps = {
};

export const Product = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductComponent);
