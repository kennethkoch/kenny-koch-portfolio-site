import React from 'react';
import { Segment, Container, Header } from 'semantic-ui-react'
import '../../../public/styles.css';

const Intro = (props) => {
    return (
      <Segment id='intro'
  inverted
  textAlign='center'
  vertical
  >
  <Container id='intro-container' text>
  <Header id='intro-header' textAlign='center' as='h1'>Kenny Koch
  </Header>
  <Header.Subheader id='intro-subheader' textAlign='center' as='h3'>
  Web Developer
  </Header.Subheader>
  </Container>
  </Segment>
    )
}

export default Intro
