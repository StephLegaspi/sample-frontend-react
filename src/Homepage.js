import React, {Component} from 'react';
import {Header, Segment} from 'semantic-ui-react';

class Homepage extends Component{
	render(){
		return(
			<div>
				<Segment vertical text id='div-homepage'>
			      <Header as='h1'>Homepage</Header>
			      <Header as='h1'>Homepage</Header>
			      <Header as='h1'>Homepage</Header>
			      <Header as='h1'>Homepage</Header>
			    </Segment>

			    <Segment vertical text id='div-homepage'>
			      <Header as='h1'>Homepage</Header>
			      <Header as='h1'>Homepage</Header>
			      <Header as='h1'>Homepage</Header>
			      <Header as='h1'>Homepage</Header>
			    </Segment>
			</div>
		);
	}

}

export default Homepage;