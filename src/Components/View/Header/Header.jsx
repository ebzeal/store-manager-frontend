import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Segment } from 'semantic-ui-react';

const Header = ({ children }) => {
  return (
    <Segment inverted>
      <Menu inverted pointing secondary stackable>
        <Menu.Item>
          <img
            className="ui image"
            data-test="logoImg"
            src="https://res.cloudinary.com/ebzeal/image/upload/v1551350124/Ebzeal%20Stores/logo.png"
            alt="Logo"
            size="mini"
            id="headerLogo"
          />
        </Menu.Item>
        {children}
      </Menu>
    </Segment>
  );
};

Header.propTypes = {
  children: PropTypes.node
};

Header.defaultProps = {
  children: null
};

export default Header;
