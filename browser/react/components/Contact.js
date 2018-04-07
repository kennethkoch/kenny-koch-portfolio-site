import React from 'react';
import { Segment, Icon, Grid } from 'semantic-ui-react'
import '../../../public/styles.css'

const Contact = (props) => {

    return (
      <Segment id='contact'
  inverted
  textAlign='center'
  vertical
  > <Grid padded='horizontally' verticalAlign='middle' centered textAlign = 'left' columns='equal'>
    <Grid.Row centered>
      <Grid.Column>
      <div >
      <a href='https://github.com/kennethkoch'>
        <Icon name='github' size='big'></Icon>
        View my GitHub
        </a>
      </div>
      </Grid.Column>
      <Grid.Column>

      </Grid.Column>
      <Grid.Column>

      </Grid.Column>
      <Grid.Column>

      </Grid.Column>
    </Grid.Row>
    </Grid></Segment>
    )
};

export default Contact;
