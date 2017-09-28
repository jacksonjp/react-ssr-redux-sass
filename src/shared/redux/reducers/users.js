import 'isomorphic-fetch';

require('es6-promise').polyfill();

export const USERS_LOADED = '@ssr/users/loaded';

const initialState = {
  items: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
  case USERS_LOADED:
    return Object.assign({}, state, { items: action.items });

  default:
    return state;
  }
}

export const fetchUsers = () => dispatch => fetch('//jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then((users) => {
    dispatch({
      type: USERS_LOADED,
      items: users
    });
  });
