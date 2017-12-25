import React from 'react';
import $ from 'jquery'; 

import { Collapsible, CollapsibleItem, Chip, Card } from 'react-materialize'

import './Work.css';

class Work extends React.Component{

	render(){
		return(
			<div className="Work wrap" >
				<h1 className="section-title wow fadeInUp" >Experiences</h1>
				<div className="Work-content" >
					<Collapsible accordion defaultActiveKey={0}>
						<CollapsibleItem 
							header='Customer Happiness / 2016 - Present' 
							icon='filter_drama_setting'>
							<Card 
								className='grey lighten-4 card' 
								textClassName='black-text' 
								title='@ GetQuanty - Paris' 
								actions={[
								<Chip>ReactJs</Chip>,
								<Chip>Adobe Suite</Chip>,
								<Chip>Trello</Chip>
								]}>
								<p>I am the bridge between the customers and the dev team.</p>
							</Card>
						</CollapsibleItem>
						<CollapsibleItem 
							header='SEO Project Manager / 2015 - 2016' 
							icon='search'>
							<Card 
								className='grey lighten-4 card' 
								textClassName='black-text' 
								title='@ Fullsix - Paris' 
								actions={[
								<Chip>SEO</Chip>,
								<Chip>Social Media</Chip>,
								<Chip>Growth Hacking</Chip>,
								<Chip>HTML</Chip>
								]}>
								<p>Managing of different projects in the famous parisian digital agency.</p>
							</Card>
						</CollapsibleItem>
						<CollapsibleItem 
							header='Web Content Integrator / 2013 - 2015' 
							icon='code'>
							<Card 
								className='grey lighten-4 card' 
								textClassName='black-text' 
								title='Freelance - Paris' 
								actions={[
								<Chip>Wordpress</Chip>,
								<Chip>Adobe Suite</Chip>,
								<Chip>Community Management</Chip>,
								<Chip>HTML / CSS</Chip>
								]}>
								<p>Managing of different projects in the famous parisian digital agency.</p>
							</Card>
						</CollapsibleItem>
					</Collapsible>	
				</div>
			</div>
		)
	}
}

export default Work; 