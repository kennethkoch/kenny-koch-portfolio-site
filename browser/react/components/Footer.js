import React from 'react';
import { Segment, Icon, Grid } from 'semantic-ui-react';
import '../../../public/styles.css';

const Footer = props => (
  <Segment id='footer' inverted vertical>
    <Grid
      padded='horizontally'
      verticalAlign='middle'
      columns='equal'
    >
      <Grid.Row>
        <Grid.Column textAlign='center'>
          <div>
            <a href="https://github.com/kennethkoch">
              <Icon name='github' size='big' />
              View my GitHub
            </a>
          </div>
        </Grid.Column>
        <Grid.Column textAlign='center'>
          <div>
            <a href="https://www.linkedin.com/in/kenny-koch">
              <Icon name='linkedin square' size='big' />
              Connect on LinkedIn
            </a>
          </div>
        </Grid.Column>
        <Grid.Column textAlign='center'>
          <div>
            <a href="mailto:kennykoch47@gmail.com">
              <Icon name='mail' size='big' />
              kennykoch47@gmail.com
            </a>
          </div>
        </Grid.Column>
        <Grid.Column textAlign='center'>
          <div>
            <a href="https://twitter.com/kennykoch47">
              <Icon name='twitter' size='big' />
              @kennykoch47
            </a>
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
);

export default Footer;
