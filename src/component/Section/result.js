import React, {Component} from 'react';
import Section from '../Template/sectionTemplate';
import {Col,Panel, Button, Row} from 'react-bootstrap';

export default class Result extends Component {

	renderResults = () => {
		let {articles} = this.props; //this is like writting this.state.articles

		//return this.state.articles.map(item => {
		return articles.map(item => {
			return (
					<Panel>
						{item.title}
						<Button className="pull-right" onClick={()=> this.props.saveArticle(item)}>Save</Button>
					</Panel>
				);

		})
	}

	render(){

		return(
			<div>
				<Section headerText="Result"> 
					<Col xs={12} className="result-box">
						 {this.renderResults()}
					</Col>

				</Section>

				
			</div>
			);
	}
}