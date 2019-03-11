import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Image, Icon, Label } from 'semantic-ui-react';
import UserIcon from '../UserProfileDropdown/UserProfileDropdown';

class AdminHeader extends Component {
  state = { activeItem: '' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <div className="landingPage__mobile">
        <Link to="/dashboard" className="menuItems">
          <Menu.Item name="dashboard" active={activeItem === 'dashboard'} onClick={this.handleItemClick} />
        </Link>
        <Link to="/products" className="menuItems">
          <Menu.Item name="products" active={activeItem === 'products'} onClick={this.handleItemClick} />
        </Link>
        {/* <Link to="/adminSales" className="menuItems wide">
          <Menu.Item name="View Sales" active={activeItem === 'View Sales'} onClick={this.handleItemClick} />
        </Link> */}
        <Link to="/users" className="menuItems">
          <Menu.Item name="Users" active={activeItem === 'Users'} onClick={this.handleItemClick} />
        </Link>
        {/* <Link to="/Incidence" className="menuItems">
          <Menu.Item name="incidence" active={activeItem === 'incidence'} onClick={this.handleItemClick} />
        </Link>
        <Link to="/cart" className="menuItems">
          <Menu.Item id="cartIcon">
            <Icon name="cart" />
            {/* <Label color="red" floating /> 
          </Menu.Item>
        </Link>
        <Menu.Item id="userProfile" className="menuItems">
          <Image circular src="https://react.semantic-ui.com/images/avatar/large/patrick.png" size="mini" />

          <UserIcon />
        </Menu.Item> */}
      </div>
    );
  }
}

export default AdminHeader;
