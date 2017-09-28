import React from 'react';

const User = props => (
  <div>
    <span>
      <i>person</i>
      <span>{props.user.name}</span>
    </span>
  </div>
);

export default User;
