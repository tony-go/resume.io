import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './View.css'

import Work from '../Work/Work'
import Skills from '../Skills/Skills'
import Education from '../Education/Education'

class View extends React.Component{
	render(){
		return (
			<Router>
				<div>
					<Route path='/work' component={Work} />
					<Route path='/skills' component={Skills} />
					<Route path='/education' component={Education} />
				</div>
			</Router>
		)
	}
}

export default View; 