import React, { Component } from 'react';
import {PageHeader, Row, Col, Grid} from 'react-bootstrap';

export default class Header extends Component {

	render() {
		return (
			<div className="header">
				 <Grid>
          <Row className="show-grid">
            <Col xs={12}  className="text-center">
              <PageHeader>Example page header <br/> <small>Subtext for header</small></PageHeader>
            </Col>
          </Row>
        </Grid>
			</div>
			);
	}
}