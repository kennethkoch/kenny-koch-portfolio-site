import React, {Component} from 'react';
import {Segment} from 'semantic-ui-react'
import '../../../public/styles.css';

export default class Intro extends Component {
  render (){
    return (
      <Segment id='masthead'
  inverted
  textAlign='center'
  style={{ minHeight: '100vh', padding: '1em 0em' }}
  vertical
  ></Segment>
    )
  }
}
