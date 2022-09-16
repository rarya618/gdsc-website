
import Header from './Header';
import Anchor from './Anchor';
import Registration from './Registration'
import Prizes from './Prizes'
import Marking from './Marking'
import Dates from './Dates'


function Event() {
	return (
		<>
			<Header />
            <Anchor />
            <Registration />
            <Prizes/>
            <Marking />
            <Dates />
		</>
	);
}

export default Event;