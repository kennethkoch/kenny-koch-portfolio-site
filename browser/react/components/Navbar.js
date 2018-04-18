import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link, animateScroll as scroll } from 'react-scroll';
import '../../../public/styles.css';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeClasses: [true, false, false],
    };
    this.toggleClass = this.toggleClass.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
  }


  componentWillReceiveProps(nextProps) {
    this.toggleClass(nextProps.activeSection);
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  toggleClass(index) {
    const activeClasses = [...this.state.activeClasses]; // create a copy of state array
    const newActiveClasses = activeClasses.map((active, idx) => {
      if (idx === index) {
        return true;
      }
      return false;
    });
    this.setState({ activeClasses: newActiveClasses });
  }

  render() {
    return (
      <div>
        <Menu id='navbar' large fluid widths={8} fixed="top" inverted pointing borderless secondary>
          <Menu.Item
            as={Link}
            to="home"
            spy={false}
            smooth
            active={this.state.activeClasses[0]}
            onClick={() => this.scrollToTop()}
          >
          Home
          </Menu.Item>
          <Menu.Item
            as={Link}
            to="about"
            spy={false}
            smooth
            active={this.state.activeClasses[1]}
          >
          About
          </Menu.Item>
          <Menu.Item
            as={Link}
            to="portfolio"
            spy={false}
            duration={1000}
            smooth
            active={this.state.activeClasses[2]}
          >
          Portfolio
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}
