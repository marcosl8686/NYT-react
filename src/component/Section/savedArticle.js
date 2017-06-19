import React, {Component} from 'react';
import Section from '../Template/sectionTemplate';
import {Col,Panel, Button} from 'react-bootstrap';

export default class SavedArticle extends Component {

	renderSavedArticles = () => {
		let {savedArticles} = this.props;
		return savedArticles.map((item, key) => {
				let header = (
						<div>
							{item.title}
							<Button className="pull-right">Remove</Button>
						</div>
					)
					
				return	<div key={key} >
					    <Panel header={header}>
					      {item.time}
					      
					    </Panel>
					</div>
		})
	}

	render(){

		return(
			<div>
				<Section headerText="Saved Article"> 
					<Col xs={12}>
						{this.renderSavedArticles()}
					</Col>
				</Section>

				
			</div>
			);
	}
}	