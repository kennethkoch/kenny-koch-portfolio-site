import React from 'react';
import { Segment, Card } from 'semantic-ui-react'
import '../../../public/styles.css'

const Portfolio = (props) => {

    return (
      <Segment id='portfolio'
  inverted
  textAlign='center'
  vertical
  >
  <Card.Group id='projects' centered itemsPerRow={3}>
    <Card color='red'>
    <Card.Content>
      <Card.Header>Project Title</Card.Header>
      <Card.Meta>role, time worked on</Card.Meta>
      <Card.Description>description of the project</Card.Description>
    </Card.Content>
    <Card.Content extra>technologies used</Card.Content>
    </Card>
    <Card color='orange'>
    <Card.Content>
      <Card.Header>Project Title</Card.Header>
      <Card.Meta>role, time worked on</Card.Meta>
      <Card.Description>description of the project</Card.Description>
    </Card.Content>
    <Card.Content extra>technologies used</Card.Content>
    </Card>
    <Card color='yellow'>
    <Card.Content>
      <Card.Header>Project Title</Card.Header>
      <Card.Meta>role, time worked on</Card.Meta>
      <Card.Description>description of the project</Card.Description>
    </Card.Content>
    <Card.Content extra>technologies used</Card.Content>
    </Card>
    <Card color='red'>
    <Card.Content>
      <Card.Header>Project Title</Card.Header>
      <Card.Meta>role, time worked on</Card.Meta>
      <Card.Description>description of the project</Card.Description>
    </Card.Content>
    <Card.Content extra>technologies used</Card.Content>
    </Card>
    <Card color='orange'>
    <Card.Content>
      <Card.Header>Project Title</Card.Header>
      <Card.Meta>role, time worked on</Card.Meta>
      <Card.Description>description of the project</Card.Description>
    </Card.Content>
    <Card.Content extra>technologies used</Card.Content>
    </Card>
    <Card color='yellow'>
    <Card.Content>
      <Card.Header>Project Title</Card.Header>
      <Card.Meta>role, time worked on</Card.Meta>
      <Card.Description>description of the project</Card.Description>
    </Card.Content>
    <Card.Content extra>technologies used</Card.Content>
    </Card>
  </Card.Group>
  </Segment>
    )
};

export default Portfolio;
