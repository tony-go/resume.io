import React from 'react';

import './Work.css';

class Work extends React.Component{
	render(){
		return(
			<div className="Work" >
				<ul class="collapsible" data-collapsible="accordion">
					<li>
					<div class="collapsible-header">
						<i class="material-icons">filter_drama</i>
						Customer Happiness @ GetQuanty / Paris
						<span class="badge">Poste actuel</span></div>
					<div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
					</li>
					<li>
					<div class="collapsible-header">
						<i class="material-icons">place</i>
						Project Manager @ Fullsix / Paris
						<span class="badge">2016 / 2017</span></div>
					<div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
					</li>
				</ul>
			</div>
		)
	}
}

export default Work; 