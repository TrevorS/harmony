import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { websocketConnect } from '../actions/websocket';
import { executeJoinChat } from '../actions';

import App from '../components/App';

const mapStateToProps = state => ({
  isOpen: state.websocket.isOpen,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ websocketConnect, executeJoinChat }, dispatch);

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
