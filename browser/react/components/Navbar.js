import React from 'react';
import '../../../public/styles.css'
const Navbar = (props) => {
  return (
    <div className='navbar'>
      <ul>
        <li>Home</li>
        <li>Blog</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
