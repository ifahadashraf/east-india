import { HomeComponent } from './index';
import { connect } from 'react-redux';
import { selectProductsFromState} from '../../selectors';
import { actions } from '../../actions';

const mapStateToProps = state => ({
  products: selectProductsFromState(state),
});

const mapDispatchToProps = {
  setProducts: actions.setProducts,
};

export const Home = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeComponent);
