import React from 'react';
import { Collapsible, CollapsibleItem } from 'react-materialize'

import './Skills.css';

class Skills extends React.Component{

	render(){
		return(
			<div className="Skills wrap">
				<div className="section-title wow fadeInUp">
				<h1>My Skills</h1>
				<span className="border"></span>
				</div>
				<article className="row">
					<ul>
						<li className="adobe">
							<h2>Adobe Suite / Sketch</h2>
							<div>
								<span className="animated fadeInLeft"></span>
							</div>
						</li>
						<li className="react">
							<h2>ReactJs</h2>
							<div>
								<span className="animated fadeInLeft"></span>
							</div>
						</li>
						<li className="es6">
							<h2>Javascript / ES6</h2>
							<div>
								<span className="animated fadeInLeft"></span>
							</div>
						</li>
						<li className="node">
							<h2>NodeJs</h2>
							<div>
								<span className="animated fadeInLeft"></span>
							</div>
						</li>
						<li className="redux">
							<h2>Redux</h2>
							<div>
								<span className="animated fadeInLeft"></span>
							</div>
						</li>
					</ul>
				</article>
		  	</div>
		)
	}
}

export default Skills; 