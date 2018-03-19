import React, { Component } from 'react';
import Navbar from './Navbar'
import Intro from './Intro'
import Portfolio from './Portfolio'
import Contact from './Contact'
import About from './About'


export default class Main extends Component {
  render () {
    return (
      <div id='main' className='container'>
      <Navbar />
      <Intro />
      <Portfolio />
      <About />
      <Contact />
      </div>
    )
  }
}
