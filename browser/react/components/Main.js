import React, { Component } from 'react';
import Navbar from './Navbar'
import Intro from './Intro'
import Portfolio from './Portfolio'
import Contact from './Contact'
import About from './About'
import { Visibility } from 'semantic-ui-react';


export default class Main extends Component {

  constructor (props) {
    super (props)
    this.state = {
      activeSection: 0
    }
    this.handleTopPassed = this.handleTopPassed.bind(this)
  }

  componentDidMount() {
    this.navbarHeight = document.getElementById('navbar').clientHeight
  }

  handleTopPassed(index) {
    this.setState({ activeSection: index })
  }

  render () {
    return (
      <div id='main' className='container'>
      <Navbar activeSection={this.state.activeSection}/>
      <Intro/>
      <Visibility offset={200} onTopPassed={() => this.handleTopPassed(1)}><About /></Visibility>
      <Visibility offset={45} onTopPassed={() => this.handleTopPassed(2)}><Portfolio /></Visibility>
      <Contact />
      </div>
    )
  }
}
