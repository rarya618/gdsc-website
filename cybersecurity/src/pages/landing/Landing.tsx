import React from 'react';
import ReactDOM from 'react-dom';

import About from './About';
import EventContainer from './Event';
import Members from './Members';


function Landing() {
	return (
		<>
			<About />
			<EventContainer />
			<Members />
		</>
	);
}

export default Landing;