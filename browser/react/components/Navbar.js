import React, {Component} from 'react';
import { Menu } from 'semantic-ui-react'
import * as Scroll from 'react-scroll';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import '../../../public/styles.css'

export default class Navbar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      activeClasses: [true, false, false]
    }
    this.toggleClass = this.toggleClass.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.scrollToTop = this.scrollToTop.bind(this)
  }


  componentWillReceiveProps(nextProps) {
    this.toggleClass(nextProps.activeSection)
}

  scrollToTop(){
  scroll.scrollToTop();
  }

  handleClick(index){
    this.scrollToTop()
  }

  toggleClass(index) {
    let activeClasses = [...this.state.activeClasses]; // create a copy of state array
    let newActiveClasses = activeClasses.map((active, idx) => {
      if (idx === index) {
        return true
      } else {
        return false
      }
    })
    this.setState({activeClasses:newActiveClasses})
    };

  render () {
    return (
      <div>
      <Menu id='navbar' large fluid widths={8} fixed="top" inverted pointing borderless secondary>
      <Menu.Item as={Link} to={'home'} spy={false} smooth={true} active={this.state.activeClasses[0]} onClick={() => this.handleClick(0)}>Home</Menu.Item>
      <Menu.Item as={Link} to={'about'} spy={false} smooth={true} active={this.state.activeClasses[1]} onClick={() => this.handleClick(1)}>About</Menu.Item>
      <Menu.Item as={Link} to={'portfolio'} spy={false} duration={1000} smooth={true} active={this.state.activeClasses[2]} onClick={() => this.handleClick(2)}>Portfolio</Menu.Item>
      </Menu>
      </div>
    )
  }
};
