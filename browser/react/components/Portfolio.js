import React from 'react';
import { Segment, Card, Icon } from 'semantic-ui-react'
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
      <Card.Header>FortySix</Card.Header>
      <Card.Meta>developer, Jan 2018-Feb 2018</Card.Meta>
      <Card.Description>FortySix is a platform that allows users to customize
       and run genetic algorithms. The computational load of each genetic
       algorithm running on the platform is distributed across many different
       web browser clients, meaning any user can sign up and contribute their
       computing power. I was part of a team of four developers who built this
       at Fullstack Academy over the course of about 2 weeks.</Card.Description><br />
       <a className='portfolio-link' href='https://github.com/Minierre/fortysix'>
         <Icon name='github' size='big'></Icon>
         View on GitHub
        </a>
       <a className='portfolio-link' href='https://www.youtube.com/watch?v=SiYpjTP8c7s&index=22&list=PLx0iOsdUOUmndNwdSO_UI3KGiNlIMsPkQ'>
         <Icon name='youtube' size='big'></Icon>
         View our Demo
        </a>
    </Card.Content>
    <Card.Content extra>JavaScript, React, Redux Express, Sequelize,
     Web Workers, threads.js Socket.IO</Card.Content>
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
