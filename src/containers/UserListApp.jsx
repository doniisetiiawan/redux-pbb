/* eslint-disable react/prop-types */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as UsersActions from '../actions/UsersActions';
import { AddUserInput, UserList } from '../components';

@connect((state) => ({
  userlist: state.userlist,
}))
class UserListApp extends React.Component {
  render() {
    const {
      userlist: { usersById },
      dispatch,
    } = this.props;
    const actions = bindActionCreators(
      UsersActions,
      dispatch,
    );

    return (
      <div>
        <h1>UserList</h1>
        <AddUserInput addUser={actions.addUser} />
        <UserList users={usersById} actions={actions} />
      </div>
    );
  }
}

export default UserListApp;
