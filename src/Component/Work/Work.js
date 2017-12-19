import React from 'react';
import { Collapsible, CollapsibleItem } from 'react-materialize'

import './Work.css';

class Work extends React.Component{
	render(){
		return(
			<div className="Work" >
				<Collapsible accordion>
					<CollapsibleItem header='First' icon='filter_drama'>
						Lorem ipsum dolor sit amet.
					</CollapsibleItem>
					<CollapsibleItem header='Second' icon='place'>
						Lorem ipsum dolor sit amet.
					</CollapsibleItem>
					<CollapsibleItem header='Third' icon='whatshot'>
						Lorem ipsum dolor sit amet.
					</CollapsibleItem>
				</Collapsible>
			</div>
		)
	}
}

export default Work; 