import React, { Component } from 'react';
import { Segment, Header, Grid, List } from 'semantic-ui-react'
import '../../../public/styles.css'

const About = (props) => {
    return (
      <Segment id='about'
      inverted
      textAlign='center'
      vertical
      >
      <Grid id='about-grid' columns={2}>
      <Grid.Row>
        <Grid.Column>
        <Header as='h1' inverted>Who am I?</Header>
        </Grid.Column>
        <Grid.Column>
        <Header as='h1' inverted>Skills</Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
        <p>My name is Kenny Koch and I am a fullstack software engineer. I have experience
            with both front-end and back-end web development. In February of 2018 I graduated
            from Fullstack Academy, an immersive coding bootcamp where I spent three
            months working with some of the smartest people and most talented programmers
            I've ever met. I'm now focused on continuing to build web applications and
            creating intuitive user experiences. I'm also branching out into mobile
            application development via React Native. Some of my other interests include
            blockchain technology, specifically the development of scalability solutions
            for Bitcoin such as the lightning network, as well as other decentralized
            infrastructure projects.</p>
        </Grid.Column>
        <Grid.Column>
        <List animated divided inverted size='huge'>
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
    )
};

export default About;
