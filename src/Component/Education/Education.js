import React from 'react';

import './Education.css';

class Education extends React.Component{



	render(){
		return(
		<div className="Education wrap">
			<h1>Education</h1>
			<ul className="timeline">
				<li>
					<div className="direction-r">
						<div className="flag-wrapper">
							<span className="flag">Master E-Business</span>
							<span className="time-wrapper"><span className="time">2014 - 2016</span></span>
						</div>
						<div className="desc">My current employment. Way better than the position before!</div>
					</div>
				</li>
				<li>
					<div className="direction-l">
						<div className="flag-wrapper">
							<span className="flag">Licence AEI</span>
							<span className="time-wrapper"><span className="time">2011 - 2014</span></span>
						</div>
						<div className="desc">My first employer. All the stuff I've learned and projects I've been working on.</div>
					</div>
				</li>
				<li>
					<div className="direction-r">
						<div className="flag-wrapper">
							<span className="flag">Audio Engineer Degree</span>
							<span className="time-wrapper"><span className="time">2008 - 2010</span></span>
						</div>
						<div className="desc">A description of all the lectures and courses I have taken and my final degree?</div>
					</div>
				</li>
				<li>
					<div className="direction-l">
						<div className="flag-wrapper">
							<span className="flag">Baccalauréat Série S</span>
							<span className="time-wrapper"><span className="time">2008</span></span>
						</div>
						<div className="desc">My first employer. All the stuff I've learned and projects I've been working on.</div>
					</div>
				</li>
			</ul>
		</div>
		)
	}
}

export default Education; 