import React from 'react';

import Profil from '../Profil/Profil';
import Menu from '../Menu/Menu';


class Side extends React.Component{
	render(){
		return (
			<div className="Side">
				<div className="col s12">
					<Profil />
				</div>
				<div className="col s12">
					<Menu />
				</div>
			</div>
		)
	}
}

export default Side; 