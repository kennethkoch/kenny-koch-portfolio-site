import React, { Component } from 'react';
import Navbar from './Navbar'
import Intro from './Intro'
import Portfolio from './Portfolio'
import Contact from './Contact'
import About from './About'
import { Visibility } from 'semantic-ui-react';


export default class Main extends Component {

  constructor(props) {
    super(props)
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
      <Intro activeSection = {this.state.activeSection}/>
      <Visibility once={false} throttle={500} offset={300} onTopPassed={() => this.handleTopPassed(1)} onTopPassedReverse={() => this.handleTopPassed(0)}><About /></Visibility>
      <Visibility once={false} throttle={500} offset={250} onTopPassed={() => this.handleTopPassed(2)} onTopPassedReverse={() => this.handleTopPassed(1)}><Portfolio /></Visibility>
      <Contact />
      </div>
    )
  }
}
