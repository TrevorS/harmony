import { connect } from 'react-redux';

import ChatWindow from '../components/ChatWindow';

const mapStateToProps = state => ({
  messages: state.messaging.messages,
});

const ChatWindowContainer = connect(mapStateToProps)(ChatWindow);

export default ChatWindowContainer;
