import React from 'react';
import $ from 'jquery'; 

import { Col, Card } from 'react-materialize'

import './Work.css';

class Work extends React.Component{

	render(){

		return(
			<div className="Work" >
				<Col m={12} s={12}>
					<Card className='grey lighten-4' textClassName='white-text' title='Card title' actions={[<a href='#'>This is a link</a>]}>
					I am a very simple card.
					</Card>
				</Col>
				<Col m={12} s={12}>
					<Card className='grey lighten-4' textClassName='white-text' title='Card title' actions={[<a href='#'>This is a link</a>]}>
					I am a very simple card.
					</Card>
				</Col>
				<Col m={12} s={12}>
					<Card className='grey lighten-4' textClassName='white-text' title='Card title' actions={[<a href='#'>This is a link</a>]}>
					I am a very simple card.
					</Card>
				</Col>
			</div>
		)
	}
}

export default Work; 