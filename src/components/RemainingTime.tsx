import 'bootstrap/dist/css/bootstrap.min.css';
import { Badge } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import reportWebVitals from '../reportWebVitals';

export const RemainingTime = () => {
	const [seconds, setSeconds] = useState<number>(5);
	const [minutes, setMinutes] = useState<number>(1);

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
		} else {
			decrementTime();
		}
	}, [seconds, minutes]);

	return (
		<h1><Badge bg="primary">Time Remaining: {minutes} Minutes and {seconds} Seconds</Badge></h1>
	);
};
