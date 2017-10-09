import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { executeJoinChat } from '../actions';
import App from '../App';

const mapDispatchToProps = dispatch =>
  bindActionCreators({ executeJoinChat }, dispatch);

const AppContainer = connect(null, mapDispatchToProps)(App);

export default AppContainer;
