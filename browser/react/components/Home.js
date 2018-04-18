import React from 'react';
import { Segment, Container, Header } from 'semantic-ui-react';
import '../../../public/styles.css';


const Home = props => (
  <Segment id='intro' inverted textAlign='center' vertical>
    {this.props.activeSection === 0 ? <Container id='intro-container' text>
      <Header id='intro-header' textAlign='center' as='h1'>Kenny Koch
      </Header>
      <Header.Subheader id='intro-subheader' textAlign='center' as='h3'>
  Developer
      </Header.Subheader>
    </Container> : null}
  </Segment>
);

export default Home;
