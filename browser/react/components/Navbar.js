import React from 'react';
import { Menu } from 'semantic-ui-react'
import '../../../public/styles.css'

const Navbar = (props) => {
  return (
    <div>
    <Menu stackable fluid widths={8} fixed="top" pointing secondary>
      <Menu.Item active>Home</Menu.Item>
      <Menu.Item>About</Menu.Item>
      <Menu.Item>Portfolio</Menu.Item>
      <Menu.Item>Contact</Menu.Item>
    </Menu>
    </div>
  );
};

export default Navbar;
