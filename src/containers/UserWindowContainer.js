import { connect } from 'react-redux';

import UserWindow from '../components/UserWindow';

const mapStateToProps = state => ({
  users: state.presence.users,
});

const UserWindowContainer = connect(mapStateToProps)(UserWindow);

export default UserWindowContainer;
