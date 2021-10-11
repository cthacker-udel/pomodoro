import 'bootstrap/dist/css/bootstrap.min.css';
import { Badge, Row, Col } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import reportWebVitals from '../reportWebVitals';
import { TimeComplete } from './TimeComplete';

export const RemainingTime = () => {
	const [seconds, setSeconds] = useState<number>(5);
	const [minutes, setMinutes] = useState<number>(0);
	const [toast, setToast] = useState<boolean>(false);

	const initializeTime = (amount: number) => {
		const calculateSeconds = amount * 60;
		setSeconds(calculateSeconds);
		setMinutes(amount);
	};

	const decrementTime = () => {
		setTimeout(() => {
			if (minutes === 0 && seconds === 0) {
				setSeconds(-1);
				setMinutes(-1);
			} else if (minutes === 0) {
				setSeconds(seconds - 1);
			} else if (seconds === 0) {
				setMinutes(minutes - 1);
				setSeconds(60);
			} else {
				setSeconds(seconds - 1);
			}
		}, 1000);
	};

	useEffect(() => {
		if (seconds === 0 && minutes === 0) {
			// stop iteration
			setToast(true);
			setTimeout(() => {
				setToast(false);
			}, 10000);
		} else {
			decrementTime();
		}
	}, [seconds, minutes]);

	return (
		<>
			<Row>
				<Col>
					<h1><Badge bg="primary">Time Remaining: {minutes} Minutes and {seconds} Seconds</Badge></h1>
				</Col>
				<Col>{toast && <TimeComplete />}</Col>
			</Row>
		</>
	);
};
