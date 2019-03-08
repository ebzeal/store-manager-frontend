import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const UserIcon = () => (
  <Dropdown text="Hello John">
    <Dropdown.Menu>
      <Dropdown.Item text="My Profile" />
      <Dropdown.Item text="My Sales" description="ctrl + o" />
      <Dropdown.Item text="Logout" description="ctrl + s" />
    </Dropdown.Menu>
  </Dropdown>
);

export default UserIcon;
