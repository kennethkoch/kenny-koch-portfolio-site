import React, { Component } from 'react';
import Navbar from './Navbar'
import Intro from './Intro'


export default class Main extends Component {
  render () {
    return (
      <div id='main' className='container'>
      <Navbar />
      <Intro />
      </div>
    )
  }
}
