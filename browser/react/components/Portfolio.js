import React from 'react';
import { Segment, Card, Icon, Image, List } from 'semantic-ui-react';
import '../../../public/styles.css';

const Portfolio = props => (
  <Segment id='portfolio' inverted textAlign='center' vertical>
    <Card.Group id='projects' centered stackable itemsPerRow={2}>
      <Card color='blue'>
        <Card.Content>
          <Card.Header>FortySix</Card.Header>
          <br />
          <Image src='/images/FortySix.jpeg' />
          <Card.Meta>Distributed Computing Platform</Card.Meta>
          <Card.Description>FortySix is a platform that allows users to customize
       and run genetic algorithms. The computational load of each genetic
       algorithm running on the platform is distributed across many different
       web browser clients, meaning any user can sign up and contribute their
       computing power. I was part of a team of four developers who built this
       at Fullstack Academy over the course of about 2 weeks.
          </Card.Description>
          <List className='project-links' divided relaxed animated>
            <List.Item>
              <a className='portfolio-link' href='https://github.com/Minierre/fortysix'>
                <Icon name='github' size='big' />
         View on GitHub
              </a>
            </List.Item>
            <List.Item>
              <a className='portfolio-link' href='https://www.youtube.com/watch?v=SiYpjTP8c7s&index=22&list=PLx0iOsdUOUmndNwdSO_UI3KGiNlIMsPkQ'>
                <Icon name='youtube' size='big' />
         View our Demo
              </a>
            </List.Item>
          </List>
        </Card.Content>
        <Card.Content extra>JavaScript, React, Redux, Express, Sequelize,
     Web Workers, Threads.js, Socket.IO
        </Card.Content>
      </Card>
      <Card color='teal'>
        <Card.Content>
          <Card.Header>kennykoch.com</Card.Header>
          <br />
          <Image src='/images/kennykochscreenshot.jpg' />
          <br />
          <Card.Meta>Portfolio</Card.Meta>
          <Card.Description>I decided to create my portfolio from scratch, partly
      to demonstrate my ability to do so, but mostly because this offers much
      more creative freedom and control over the product than using some
      drag and drop website builder. I will continue to update my portfolio as I
      complete new projects. Also, this website is completely open-source, so you can view
      all the code on GitHub.
          </Card.Description><br />
          <List className='project-links' divided relaxed animated>
            <List.Item>
              <a className='portfolio-link' href='https://github.com/kennethkoch/kenny-koch-portfolio-site'>
                <Icon name='github' size='big' />
        View on GitHub
              </a>
            </List.Item>
          </List>
        </Card.Content>
        <Card.Content extra>JavaScript, React, Express, Firebase</Card.Content>
      </Card>
    </Card.Group>
  </Segment>
);

export default Portfolio;
