import { HomeComponent } from './index';
import { connect } from 'react-redux';
import { selectProductsFromState} from '../../selectors';
import { actions } from '../../actions';

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
};

export const Home = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeComponent);
