/* eslint-disable jsx-a11y/anchor-is-valid,react/prop-types */
import React from 'react';
import styles from './UserListItem.css';

function UserListItem(props) {
  return (
    <div>
      <div className="media-left">
        <a href="#">
          <img
            className="media-object img-thumbnail"
            src="http://placehold.it/64x64"
            alt="media"
          />
        </a>
      </div>
      <div className={`media-body ${styles.paddng10}`}>
        <h3 className="media-heading">
          <strong>
            <a href="#">{props.name}</a>
          </strong>
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Praesent gravida euismod ligula, vel semper
          nunc blandit sit amet.
        </p>

        <div className={`pull-right ${styles.userActions}`}>
          <button
            className={`btn btn-default ${styles.btnAction}`}
            onClick={() => props.deleteUser(props.id)}
            title="Delete the user"
            type="button"
          >
            Delete the user <i className="fa fa-trash" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserListItem;
