import React from 'react';
import { Segment, Icon, Grid } from 'semantic-ui-react'
import '../../../public/styles.css'

const Contact = (props) => {

    return (
      <Segment id='contact'
  inverted
  textAlign='center'
  vertical
  > <Grid padded='horizontally' verticalAlign='middle' centered textAlign='centered' columns='equal'>
    <Grid.Row centered>
      <Grid.Column textAlign='centered'>
      <div >
      <a href='https://github.com/kennethkoch'>
        <Icon name='github' size='big'></Icon>
        View my GitHub
        </a>
      </div>
      </Grid.Column>
      <Grid.Column textAlign='centered'>
      <div>
      <a href='https://www.linkedin.com/in/kenny-koch/'>
      <Icon name='linkedin square' size='big'></Icon>
      Connect on LinkedIn
      </a>
      </div>
      </Grid.Column>
      <Grid.Column textAlign='centered'>
      <div>
      <Icon name='mail' size='big'></Icon>
      kennykoch47@gmail.com
      </div>
      </Grid.Column>
      <Grid.Column textAlign='centered'>
      <div>
      <a href='https://twitter.com/kennykoch47'>
      <Icon name='twitter' size='big'></Icon>
      @kennykoch47
      </a>
      </div>
      </Grid.Column>
    </Grid.Row>
    </Grid></Segment>
    )
};

export default Contact;
