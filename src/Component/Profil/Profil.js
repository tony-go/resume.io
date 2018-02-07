import React from 'react';
import './Profil.css'
import Tony from './tony.jpg'

import { Link } from 'react-router-dom';

class Profil extends React.Component{
	render(){
		return (
			<div className="Profil col 12 s12" >
				<div className="Profil-image">
					<Link to="/">
						<img src={Tony} alt="tony gorez" className="circle responsive-img z-depth-4" />
					</Link>
				</div>
				<div className="Profil-text col 12 s12">
					<h1>Tony Gorez</h1>
					<h2>Front-end <br/> Developer</h2>
					<span>
						<a href="tel:+33 6 28 74 18 36">
							<i class="fa fa-phone  fa-2x" aria-hidden="true"></i>
						</a>
					</span>
					<span>
						<a href="mailto:gorez.tony@gmail.com">
							<i class="fa fa-envelope  fa-2x" aria-hidden="true"></i>
						</a>
					</span>
				</div>
			</div>
		)
	}
}

export default Profil; 