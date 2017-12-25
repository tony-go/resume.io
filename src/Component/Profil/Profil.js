import React from 'react';
import './Profil.css'
import Tony from './tony.jpg'

import { Link } from 'react-router-dom';

class Profil extends React.Component{
	render(){
		return (
			<div className="Profil col 12" >
				<div className="Profil-image row 12">
					<Link to="/">
						<img src={Tony} alt="tony gorez" className="circle responsive-img z-depth-4" />
					</Link>
				</div>
				<div className="Profil-text left-align row 12">
					<h1>Tony Gorez</h1>
					<h2>Front-end <br/> Developer</h2>
				</div>
			</div>
		)
	}
}

export default Profil; 