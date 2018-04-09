import React, { Component } from 'react';
import { Segment, Header } from 'semantic-ui-react'
import '../../../public/styles.css'

const About = (props) => {
    return (
      <Segment id='about'
      inverted
      textAlign='center'
      vertical
      >
      <Header textAlign='center'>Can you read this?</Header>
      </Segment>
    )
};

export default About;
