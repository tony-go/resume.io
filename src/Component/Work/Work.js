import React from 'react';
import $ from 'jquery'; 

import { Row, Col, Card, Chip } from 'react-materialize'

import './Work.css';

class Work extends React.Component{

	render(){

		return(
			<div className="Work wrap" >
				<h1 className="section-title wow fadeInUp" >Experiences</h1>
				<Row>
					<Col l={10} m={12} s={12}>
						<Card 
							className='grey lighten-4 card' 
							textClassName='black-text' 
							title='Customer Happiness' 
							actions={[
							<Chip>ReactJs</Chip>,
							<Chip>Adobe Suite</Chip>,
							<Chip>Trello</Chip>
							]}
							>
							<em>GetQuanty</em>
							<p>I am the bridge between the customers and the dev team.</p>
						</Card>
					</Col>
				</Row>
				<Row>
					<Col l={10} m={12} s={12}>
						<Card 
							className='grey lighten-4 card' 
							textClassName='black-text' 
							title='Project Manager' 
							actions={[
							<Chip>SEO</Chip>,
							<Chip>Social Media</Chip>,
							<Chip>Growth Hacking</Chip>,
							<Chip>HTML</Chip>
							]}
							>
							<em>Fullsix</em>
							<p>Managing of different projects in the famous parisian digital agency.</p>
						</Card>
					</Col>
				</Row>
				<Row>	
					<Col  l={10} m={12} s={12}>
						<Card 
							className='grey lighten-4 card' 
							textClassName='black-text' 
							title='Web Content Integrator / CM' 
							actions={[
							<Chip>Wordpress</Chip>,
							<Chip>Adobe Suite</Chip>,
							<Chip>Community Management</Chip>,
							<Chip>HTML / CSS</Chip>
							]}
							>
							<em>Freelance</em>
							<p>Managing of different projects in the famous parisian digital agency.</p>
						</Card>
					</Col>
				</Row>
			</div>
		)
	}
}

export default Work; 