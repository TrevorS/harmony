import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { executeKeepAlive } from '../actions';
import { websocketConnect } from '../actions/websocket';

import App from '../components/App';

const mapStateToProps = state => ({
  isOpen: state.websocket.isOpen,
  handle: state.presence.handle,
});

const actionCreators = {
  websocketConnect,
  executeKeepAlive,
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(actionCreators, dispatch);

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
