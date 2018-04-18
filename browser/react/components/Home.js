import React, { Component } from 'react';
import { Segment, Container, Header } from 'semantic-ui-react';
import '../../../public/styles.css';


export default class Home extends Component {
  render() {
    const activeSection = this.props.activeSection;
    return (
      <Segment id='home' inverted textAlign='center' vertical>
        {activeSection === 0 ? <Container id='home-container' text>
          <Header id='home-header' textAlign='center' as='h1'>Kenny Koch
          </Header>
          <Header.Subheader id='home-subheader' textAlign='center' as='h3'>
      Developer
          </Header.Subheader>
        </Container> : null}
      </Segment>
    );
  }
}
