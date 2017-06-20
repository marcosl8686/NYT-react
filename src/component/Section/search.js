import React, {Component} from 'react';
import Section from '../Template/sectionTemplate';
import {fetchNews} from '../action/api';
import {Col,FormGroup, ControlLabel, HelpBlock, FormControl, Button} from 'react-bootstrap';

export default class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			term: "",
			term2: "",
			term3: ""
		}
	}

	handleChange = (event) => {
		this.setState({term: event.target.value});
		console.log(event.target.value)
	}
	handleChange2 = (event) => {
		this.setState({term2: event.target.value});
		console.log(event.target.value)
	}
	handleChange3 = (event) => {
		this.setState({term3: event.target.value});
		console.log(event.target.value)
	}

	// onFormsSubmit(event) {
	// 	event.preventDefault();
	// 	console.log("Hit");
	// 	console.log(this.state.term);
	// 	fetchNews(this.state.term);
	// 	this.setState({ term: ""});

	// }

	render(){

		return(
			<div>
				<Section headerText="Search"> 
					<Col xs={12}>
					<form >
				        <FormGroup controlId="formBasicText"
				        >
				          <div className="text-center"><h4>Topic</h4></div>
				          <FormControl
				            type="text"
				            value={this.state.value}
				            placeholder="Enter text"
				            onChange={this.handleChange}
				          />
				          <FormControl.Feedback />
				        </FormGroup>

				        <FormGroup
				          controlId="formBasicText"
				        >
				          <div className="text-center"><h4>Start Year</h4></div>
				          <FormControl
				            type="text"
				            value={this.state.value}
				            placeholder="Enter text"
				            onChange={this.handleChange2}
				          />
				          <FormControl.Feedback />
				        </FormGroup>

				        <FormGroup
				          controlId="formBasicText"
				        >
				          <div className="text-center"><h4>End Year</h4></div>
				          <FormControl
				            type="text"
				            value={this.state.value}
				            placeholder="Enter text"
				            onChange={this.handleChange3}
				          />
				          <FormControl.Feedback />
				        </FormGroup>
				        <br/>
				      	<div className="text-center">
					        <Button onClick={() => this.props.fetchArticles(this.state.term, this.state.term2, this.state.term3)}>
						      Submit
						    </Button>
					    </div>
				    </form>
					</Col>
				</Section>

				
			</div>
			);
	}
}