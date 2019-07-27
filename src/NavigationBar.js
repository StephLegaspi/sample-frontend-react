import React, {Component} from 'react';
import { Container, Menu } from 'semantic-ui-react'
import './stylesheet.css';

class NavigationBar extends Component{
	constructor(props){
		super(props);

		this.toHomepage = this.toHomepage.bind(this);
	}

	toHomepage(e){
		window.location.href='/';
	}

	toSignUp(e){
		window.location.href='/signup';
	}

	render(){
		return(
			<div>
				<Menu fixed='top' inverted>
		          <Container>
		            <Menu.Item as='a' id={this.props.activePage[0] ? 'active' : 'inactive'} onClick={this.toHomepage}>Home</Menu.Item>

		            <Menu.Item as='a' id={this.props.activePage[1] ? 'active' : 'inactive'} onClick={this.toSignUp}>Sign Up</Menu.Item>
		          </Container>
		        </Menu>
			</div>
		)
	}
}

export default NavigationBar;