import React, { Component } from 'react';
import { Menu, Segment, Image } from 'semantic-ui-react';

export default class Header extends Component {
  state = { activeItem: 'dashboard' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Segment inverted>
        <Menu inverted pointing secondary stackable>
          <Menu.Item position="left">
            <img
              className="ui image"
              data-test="logoImg"
              src="https://res.cloudinary.com/ebzeal/image/upload/v1551350124/Ebzeal%20Stores/logo.png"
              alt="Logo"
              size="mini"
              id="headerLogo"
            />
          </Menu.Item>
          <Menu.Item name="dashboard" active={activeItem === 'dashboard'} onClick={this.handleItemClick} />
          <Menu.Item name="products" active={activeItem === 'products'} onClick={this.handleItemClick} />
          <Menu.Item name="View Sales" active={activeItem === 'View Sales'} onClick={this.handleItemClick} />
          <Menu.Item name="Users" active={activeItem === 'Users'} onClick={this.handleItemClick} />
          <Menu.Item name="incidence" active={activeItem === 'incidence'} onClick={this.handleItemClick} />
          <Menu.Item position="right">
            <Image circular src="https://react.semantic-ui.com/images/avatar/large/patrick.png" size="mini" />
            Patrick
          </Menu.Item>
        </Menu>
      </Segment>
    );
  }
}
