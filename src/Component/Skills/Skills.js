import React from 'react';

import './Skills.css';

class Skills extends React.Component{
	render(){
		return(
			<div className="Skills" >
				<ul class="collapsible" data-collapsible="accordion">
					<li>
					<div class="collapsible-header">
						<i class="material-icons">filter_drama</i>
						JS
						<span class="badge">Poste actuel</span></div>
					<div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
					</li>
					<li>
					<div class="collapsible-header">
						<i class="material-icons">place</i>
						HTML /CSS
						<span class="badge">2016 / 2017</span></div>
					<div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
					</li>
				</ul>
			</div>
		)
	}
}

export default Skills; 