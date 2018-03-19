import React, {Component} from 'react';
import {Segment} from 'semantic-ui-react'
import '../../../public/styles.css';

export default class Intro extends Component {
  render (){
    return (
      <Segment id='intro'
  inverted
  textAlign='center'
  vertical
  ></Segment>
    )
  }
}
