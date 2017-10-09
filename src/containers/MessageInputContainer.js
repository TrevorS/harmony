import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { executeSendMessage } from '../actions/';

import MessageInput from '../components/MessageInput';

const mapStateToProps = state => ({
  handle: state.presence.handle,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ executeSendMessage }, dispatch);

const MessageInputContainer = connect(mapStateToProps, mapDispatchToProps)(MessageInput);

export default MessageInputContainer;
