/* eslint-disable react/prop-types */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as UsersActions from '../actions/UsersActions';
import { AddUserInput, UserList } from '../components';

function UserListApp(props) {
  const {
    userlist: { usersById },
    dispatch,
  } = props;
  const actions = bindActionCreators(
    UsersActions,
    dispatch,
  );

  return (
    <div className="container">
      <h1>UserList</h1>
      <AddUserInput addUser={actions.addUser} />
      <UserList users={usersById} actions={actions} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  userlist: state.userlist,
});

export default connect(mapStateToProps)(UserListApp);
