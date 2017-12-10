import React from 'react';
import './Menu.css'

class Menu extends React.Component{
	render(){
		return (
			<div className="Menu col 12" >
				<div className="Menu-link" >
					<ul class="pagination">
						<li class="waves-effect"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
						<li class="waves-effect menu-element"><a href="/skills"><i class="material-icons">equalizer</i></a></li>
						<li class="waves-effect menu-element"><a href="/work"><i class="material-icons">work</i></a></li>
						<li class="waves-effect menu-element"><a href="/education"><i class="material-icons">library_books</i></a></li>
						<li class="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
					</ul>
				</div>
			</div>
		)
	}
}

export default Menu; 