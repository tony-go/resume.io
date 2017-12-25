import React from 'react';
import { Collapsible, CollapsibleItem } from 'react-materialize'

import './Skills.css';

class Skills extends React.Component{

	render(){
		return(
			<div class="wrap">
				<div class="section-title wow fadeInUp">
				<h1>My Skills</h1>
				<span class="border"></span>
				</div>
				<article class="row">
					<ul>
						<li class="html">
							<em>HTML/HTML5</em>
							<div>
								<span class="animated fadeInLeft"></span>
							</div>
						</li>
						<li class="css">
							<em>CSS/CSS3</em>
							<div>
								<span class="animated fadeInLeft"></span>
							</div>
						</li>
						<li class="php">
							<em>PHP/OOP</em>
							<div>
								<span class="animated fadeInLeft"></span>
							</div>
						</li>
						<li class="mysql">
							<em>MYSQL</em>
							<div>
								<span class="animated fadeInLeft"></span>
							</div>
						</li>
						<li class="mysql">
							<em>MYSQL</em>
							<div>
								<span class="animated fadeInLeft"></span>
							</div>
						</li>
					</ul>
				</article>
		  	</div>
		)
	}
}

export default Skills; 