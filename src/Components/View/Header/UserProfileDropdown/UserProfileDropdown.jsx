import React from 'react';
import { Dropdown } from 'semantic-ui-react';

// const handleLogout = e => {
//   e.preventDefault();
//   logOutUser();
//   history.push('/');
// };
const UserIcon = () => (
  <Dropdown text="Hello John">
    <Dropdown.Menu>
      <Dropdown.Item text="My Profile" />
      <Dropdown.Item text="My Sales" description="ctrl + o" />
      {/* <Link onClick={handleLogout} to="/Logout">
        <Dropdown.Item text="Logout" description="ctrl + s" />
      </Link> */}
    </Dropdown.Menu>
  </Dropdown>
);

export default UserIcon;
