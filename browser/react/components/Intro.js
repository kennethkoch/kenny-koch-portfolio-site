import React, {Component} from 'react';
import { Segment, Container, Header } from 'semantic-ui-react'
import '../../../public/styles.css';


export default class Intro extends Component {

  constructor(props) {
    super(props)
  }


  render () {
    const activeSection = this.props.activeSection;
    return (
      <Segment id='intro'
      inverted
      textAlign='center'
      vertical
      >
      {activeSection === 0 ? <Container id='intro-container' text>
      <Header id='intro-header' textAlign='center' as='h1'>Kenny Koch
      </Header>
      <Header.Subheader id='intro-subheader' textAlign='center' as='h3'>
      Developer
      </Header.Subheader>
      </Container> : null}

      </Segment>
    )
  }
}
