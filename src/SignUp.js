import React, {Component} from 'react';
import {Container, Form, Button} from 'semantic-ui-react';

class SignUp extends Component{
	constructor(props){
		super(props);

		this.toHomepage = this.toHomepage.bind(this);

	}

	toHomepage(e){
		window.location.href = '/';
	}

	render(){
		return(
			<div>
				<Container text id='signup-form'>
					<Form >
		                <Form.Group widths='equal'>
		                  <Form.Input fluid required label='First name' placeholder='First name' />
		                  <Form.Input fluid label='Middle name' placeholder='Middle name' />
		                  <Form.Input fluid required label='Last name' placeholder='Last name'/>
		                </Form.Group>

		                <Form.Group widths='equal'>
		                  <Form.Input fluid required label='Contact Number' placeholder='Contact Number' />
		                  <Form.Input fluid required label='Email Address' placeholder='Email Address'/>
		                </Form.Group >

		                <Form.Group widths='equal'>
		                  <Form.Input fluid required type='password' label='Password' placeholder='Password'/>
		                  <Form.Input fluid required type='password' label='Repeat Password' placeholder='Repeat Password'/>
		                </Form.Group>
		            </Form>

		            <div className='button-style'>
			            <Button onClick={this.toHomepage}>
		                  Sign Up
		                </Button>
		            </div>
				</Container>
			</div>
		);
	}

}

export default SignUp;