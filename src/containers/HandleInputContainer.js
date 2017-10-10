import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  executeJoinChat,
} from '../actions';

import HandleInput from '../components/HandleInput';

const mapDispatchToProps = dispatch =>
  bindActionCreators({ executeJoinChat }, dispatch);

const HandleInputContainer = connect(null, mapDispatchToProps)(HandleInput);

export default HandleInputContainer;
