import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header';
import Anchor from './Anchor';
import Info from './Info';
import Register from './Register';
import Timeline from './Timeline';
import Members from '../landing/Members';



function Event() {
	return (
		<>
			<Header />
            <Anchor />
            <Info />
            <Timeline />
            <Register />
            <Members />
		</>
	);
}

export default Event;