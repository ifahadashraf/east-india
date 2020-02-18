import { HeaderComponent } from './index';
import { connect } from 'react-redux';
import { actions } from '../../actions';

const mapDispatchToProps = {
  setProducts: actions.setProducts,
};

export const Header = connect(
  null,
  mapDispatchToProps,
)(HeaderComponent);
