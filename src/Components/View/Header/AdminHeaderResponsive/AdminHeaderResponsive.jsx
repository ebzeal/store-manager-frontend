import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'semantic-ui-react';

const AdminHeaderResponsive = props => {
  return (
    <div className="hamburger">
      <Dropdown item icon="bars">
        <Dropdown.Menu>
          <Dropdown.Item text={<Link to="/dashboard">Dashboard</Link>} />
          <Dropdown.Item text={<Link to="/products">Products</Link>} />
          <Dropdown.Item text={<Link to="/sales">View Sales</Link>} />
          <Dropdown.Item text={<Link to="/cart">Cart</Link>} />
          <Dropdown.Item text={<Link to="/users">Users</Link>} />
          <Dropdown.Item text={<Link to="/incidence">Incidence</Link>} />
          <Dropdown.Item text={<Link to="/profile">My Profile</Link>} />
          <Dropdown.Item text={<Link to="/logout">Logout</Link>} />
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};
export default AdminHeaderResponsive;
