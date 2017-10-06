import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { sendMessage } from '../actions';
import ChatWindow from '../components/ChatWindow';

const mapStateToProps = state => ({
  messages: state.messaging.messages,
  handle: state.presence.handle,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ sendMessage }, dispatch);

const ChatWindowContainer = connect(mapStateToProps, mapDispatchToProps)(ChatWindow);

export default ChatWindowContainer;
