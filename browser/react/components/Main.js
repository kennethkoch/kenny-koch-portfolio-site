import React, { Component } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Portfolio from './Portfolio';
import Footer from './Footer';
import About from './About';
import { Visibility } from 'semantic-ui-react';


export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSection: 0,
    };
    this.handleTopPassed = this.handleTopPassed.bind(this);
  }

  handleTopPassed(index) {
    this.setState({ activeSection: index });
  }

  render() {
    return (
      <div id='main' className='container'>
        <Navbar activeSection={this.state.activeSection} />
        <Home activeSection={this.state.activeSection} />
        <Visibility
          once={false}
          throttle={500}
          offset={80}
          onTopPassed={() => this.handleTopPassed(1)}
          onTopPassedReverse={() => this.handleTopPassed(0)}
        >
          <About />
        </Visibility>
        <Visibility
          once={false}
          throttle={500}
          offset={10}
          onTopPassed={() => this.handleTopPassed(2)}
          onTopPassedReverse={() => this.handleTopPassed(1)}
        >
          <Portfolio />
        </Visibility>
        <Footer />
      </div>
    );
  }
}
