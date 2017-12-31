import React from 'react';
import './Menu.css'
import { Col } from 'react-materialize'

import { Link } from 'react-router-dom';

class Menu extends React.Component{
	render(){
		return (
			<Col s={12}>
				<div className="Menu-link" >
					<ul className="pagination">
						<li className="waves-effect"><i className="material-icons">remove</i></li>
						<li className="waves-effect menu-element">
							<Link to='/skills'>
								<i className="material-icons">equalizer</i>
							</Link>
						</li>
						<li className="waves-effect menu-element">
							<Link to='/work'>
								<i className="material-icons">work</i>
							</Link>
						</li>
						<li className="waves-effect menu-element">
							<Link to='/education'>
								<i className="material-icons">library_books</i>
							</Link>
						</li>
						<li className="waves-effect"><i className="material-icons">remove</i></li>
					</ul>
				</div>
			</Col>
		)
	}
}

export default Menu; 