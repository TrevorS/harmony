import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  executeJoinChat,
  executeKeepAlive,
} from '../actions';

import { websocketConnect } from '../actions/websocket';

import App from '../components/App';

const mapStateToProps = state => ({
  isOpen: state.websocket.isOpen,
});

const actionCreators = {
  websocketConnect,
  executeJoinChat,
  executeKeepAlive,
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(actionCreators, dispatch);

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
