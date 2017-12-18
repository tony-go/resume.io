import React from 'react';
import './Menu.css'

import { Link, Switch } from 'react-router-dom';

class Menu extends React.Component{
	render(){
		return (
			<div className="Menu col 12" >
				<div className="Menu-link" >
					<ul class="pagination">
						<li class="waves-effect"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
						<li class="waves-effect menu-element">
							<Link to='/skills'>
								<i class="material-icons">equalizer</i>
							</Link>
						</li>
						<li class="waves-effect menu-element">
							<Link to='/work'>
								<i class="material-icons">work</i>
							</Link>
						</li>
						<li class="waves-effect menu-element">
							<Link to='/education'>
								<i class="material-icons">library_books</i>
							</Link>
						</li>
						<li class="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
					</ul>
				</div>
			</div>
		)
	}
}

export default Menu; 