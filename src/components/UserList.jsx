/* eslint-disable react/prop-types */
import React from 'react';
import UsersListItem from './UsersListItem';

function UserList(props) {
  console.log(props);
  return (
    <div className="media">
      {props.users.length
      && props.users.map((users) => (
        <UsersListItem
          key={users.id}
          id={users.id}
          name={users.name}
          src={users.src}
          {...props.actions}
        />
      ))}
    </div>
  );
}

export default UserList;
