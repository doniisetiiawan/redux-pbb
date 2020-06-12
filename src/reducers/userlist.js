import uniqid from 'uniqid';
import * as types from '../constants/ActionTypes';

const initialState = {
  users: [1, 2, 3],
  usersById: [
    {
      id: 1,
      name: 'Harmeet Singh',
    },
    {
      id: 2,
      name: 'Mehul Bhatt',
    },
    {
      id: 3,
      name: 'NayanJyoti Talukdar',
    },
  ],
};

export default function users(
  state = initialState,
  action,
) {
  switch (action.type) {
    case types.ADD_USER:
      // eslint-disable-next-line no-case-declarations
      const newId = uniqid();
      return {
        ...state,
        users: state.users.concat(newId),
        usersById: state.usersById.concat({
          id: newId,
          name: action.name,
        }),
      };

    case types.DELETE_USER:
      return {
        ...state,
        users: state.users.filter((id) => id !== action.id),
        usersById: state.usersById.filter(
          (usersById) => usersById.id !== action.id,
        ),
      };

    default:
      return state;
  }
}
