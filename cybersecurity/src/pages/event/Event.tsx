import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header';
import Anchor from './Anchor';
import Info from './Info';
import Register from './Register';
import Timeline from './Timeline';



function Event() {
	return (
		<>
			<Header />
            <Anchor />
            <Info />
            <Register />
            <Timeline />
		</>
	);
}

export default Event;