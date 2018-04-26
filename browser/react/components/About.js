import React from 'react';
import { Segment, Header, Grid, List } from 'semantic-ui-react';
import { Link } from 'react-scroll';
import '../../../public/styles.css';

const About = props => (
  <Segment id='about' inverted textAlign='center' vertical>
    <Grid id='about-grid' centered>
      <Grid.Row centered>
        <Header as='h1' inverted>
            Who am I?
        </Header>
        <p>
          My name is Kenny Koch and I am a fullstack software engineer. I have experience with
          both front-end and back-end web development. In February of 2018 I graduated from
          Fullstack Academy, an immersive coding bootcamp where I spent three months working with
          some of the smartest people and most talented programmers I've ever met. I'm now focused
          on continuing to build web and mobile applications and expanding my knowledge.
          <Link to="portfolio" smooth spy={false}> Check out my portfolio</Link> to see some of my
          recent projects, and feel free to contact me via any of the methods below!
        </p>
      </Grid.Row>
      <Grid.Row centered>
        <div>
          <Header id='skills-header' as='h1' inverted>
            Skills
          </Header>
          <List animated divided relaxed horizontal inverted size='large'>
            <List.Item>JavaScript</List.Item>
            <List.Item>HTML/CSS</List.Item>
            <List.Item>React.js</List.Item>
            <List.Item>Redux</List.Item>
            <List.Item>Node.js</List.Item>
            <List.Item>Express.js</List.Item>
            <List.Item>Sequelize</List.Item>
            <List.Item>Web Development</List.Item>
            <List.Item>Responsive Design</List.Item>
            <List.Item>Mobile Development</List.Item>
            <List.Item>React Native</List.Item>
            <List.Item>WordPress</List.Item>
            <List.Item>Bootstrap</List.Item>
            <List.Item>Semantic UI</List.Item>
            <List.Item>Socket.io</List.Item>
            <List.Item>OAuth</List.Item>
            <List.Item>App Deployment</List.Item>
          </List>
        </div>
      </Grid.Row>
    </Grid>
  </Segment>
);

export default About;
