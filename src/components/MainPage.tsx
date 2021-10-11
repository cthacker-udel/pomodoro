import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import { RemainingTime } from './RemainingTime';

export const MainPage = () => {
	const [tmpNumber, setTmpNumber] = useState<number>(0);
	return (
		<Container>
			<Row>
				<Col>
					<RemainingTime />
				</Col>
			</Row>
		</Container>
	);
};
