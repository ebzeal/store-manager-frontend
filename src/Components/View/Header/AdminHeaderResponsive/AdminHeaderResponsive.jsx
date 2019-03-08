import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'semantic-ui-react';

const AdminHeaderResponsive = props => {
  return (
    <div className="hamburger">
      <Dropdown item icon="bars">
        <Dropdown.Menu>
          <Dropdown.Item text={<Link to="/search">Dashboard</Link>} />
          <Dropdown.Item text={<Link to="/login">Products</Link>} />
          <Dropdown.Item text={<Link to="/signup">View Sales</Link>} />
          <Dropdown.Item text={<Link to="/signup">Users</Link>} />
          <Dropdown.Item text={<Link to="/signup">Incidence</Link>} />
          <Dropdown.Item text={<Link to="/signup">My Profile</Link>} />
          <Dropdown.Item text={<Link to="/signup">My Sales</Link>} />
          <Dropdown.Item text={<Link to="/signup">Logout</Link>} />
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};
export default AdminHeaderResponsive;
