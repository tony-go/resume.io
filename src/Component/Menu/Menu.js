import React from 'react';
import './Menu.css'

import { Link } from 'react-router-dom';

class Menu extends React.Component{
	render(){
		return (
			<div className="Menu col 12" >
				<div className="Menu-link" >
					<ul className="pagination">
						<li className="waves-effect"><a href="#!"><i className="material-icons">chevron_left</i></a></li>
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
						<li className="waves-effect"><a href="#!"><i className="material-icons">chevron_right</i></a></li>
					</ul>
				</div>
			</div>
		)
	}
}

export default Menu; 