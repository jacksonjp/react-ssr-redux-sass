//@flow

import React from 'react';

type Props = {
  user: Object
};

const User = (props: Props) => (
  <div>
    <span>
      <i>person</i>
      <span>{props.user.name}</span>
    </span>
  </div>
);

export default User;
