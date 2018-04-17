import React from 'react';
import { Segment, Header, Grid, List } from 'semantic-ui-react';
import '../../../public/styles.css';

const About = props => (
  <Segment id="about" inverted textAlign="center" vertical>
    <Grid id="about-grid" columns={2}>
      <Grid.Row>
        <Grid.Column>
          <Header as="h1" inverted>
            Who am I?
          </Header>
        </Grid.Column>
        <Grid.Column>
          <Header as="h1" inverted>
            Skills
          </Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <p>
            My name is Kenny Koch and I am a fullstack software engineer. I have experience with
            both front-end and back-end web development. In February of 2018 I graduated from
            Fullstack Academy, an immersive coding bootcamp where I spent three months working with
            some of the smartest people and most talented programmers I've ever met. I'm now focused
            on continuing to build web and mobile applications and expanding my knowledge. One area
            which I have become deeply interested in is blockchain technology. <a href="">Check out
            my blog</a> where I write more about various projects the crypto space, and feel free
            to contact me about anything via any of the methods below!
          </p>
        </Grid.Column>
        <Grid.Column>
          <List animated divided inverted size="huge">
            <List.Item>JavaScript</List.Item>
            <List.Item>HTML/CSS</List.Item>
            <List.Item>React</List.Item>
            <List.Item>Redux</List.Item>
            <List.Item>Node.js</List.Item>
            <List.Item>Express.js</List.Item>
            <List.Item>Sequelize</List.Item>
            <List.Item>React Native</List.Item>
            <List.Item>Web Design</List.Item>
            <List.Item>WordPress</List.Item>
            <List.Item>Bootstrap</List.Item>
            <List.Item>Semantic UI</List.Item>
            <List.Item>Socket.io</List.Item>
            <List.Item>OAuth</List.Item>
          </List>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
);

export default About;
