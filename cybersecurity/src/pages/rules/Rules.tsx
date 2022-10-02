import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header';
import Anchor from './Anchor';
import Structure from './Structure'
import Prizes from './Prizes'
import Win from './Win'
import Rest from './Rest'


function Rules() {
	return (
		<>
			<Header />
            <Anchor />
            <Structure />
            <Prizes/>
            <Win />
            <Rest />
		</>
	);
}

export default Rules;