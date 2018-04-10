import React, { Component } from 'react';
import { Segment, Header, Grid } from 'semantic-ui-react'
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
        <p>Lorem ipsum dolor sit amet, nostro dictas ocurreret est ut, epicurei officiis honestatis sea id. An quo ridens legimus. At his splendide conceptam, per in munere quaeque. Eu pro sonet reformidans, debet omittam principes per at.

Est facilisis conclusionemque ne, qui recteque petentium ea, vel in platonem intellegebat. Eu mei iudicabit comprehensam, cu porro mucius imperdiet est. Nec id augue viris intellegebat. Viderer appellantur mediocritatem no vis, an mel sadipscing adversarium. Sea exerci labitur democritum ut. Iudico iuvaret his te, zril postulant suavitate mea te.

Errem iriure his eu, nec ne oporteat imperdiet. Quaeque verterem eu qui, vel cu facete persius, saperet democritum intellegebat cu eam. Ei sed alienum minimum commune, vix ad adhuc nihil efficiantur, ea tamquam blandit eligendi nec. Et persecuti dissentiet eos.

Doming regione qui at, in vim alii iusto complectitur. Mea quem quis te, dicunt aliquip nam no. No nec libris menandri voluptatibus, no tale legimus luptatum vis, dicunt phaedrum mei at. Est omnis accusamus temporibus ne, in mel erant commune.</p>
        </Grid.Column>
        <Grid.Column>
        <ul>
        <li>JavaScript</li>
        <li>HTML/CSS</li>
        <li>React</li>
        <li>Redux</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>WordPress</li>
        <li>Bootstrap</li>
        <li>Semantic UI</li>
        <li>Socket.io</li>
        <li>OAuth</li>
        <li>Sequelize</li>
        </ul>
        </Grid.Column>
      </Grid.Row>
      </Grid>
      </Segment>
    )
};

export default About;
