import 'bootstrap/dist/css/bootstrap.min.css';
import { Badge } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import reportWebVitals from '../reportWebVitals';

export const RemainingTime = () => {
	const [remainingSeconds, setRemainingSeconds] = useState<number | undefined>(10);
	const [remainingMinutes, setRemainingMinutes] = useState<number | undefined>(0);

	const getSeconds = () => remainingSeconds;

	useEffect(() => {
		const timeInterval = setInterval(() => {
			setRemainingSeconds((oldSeconds) => {
				if (oldSeconds === 0) {
					setRemainingMinutes((oldMinutes) => {
						if (oldMinutes === undefined || oldSeconds === undefined || (oldMinutes === 0 && oldSeconds === 0)) {
							clearInterval(timeInterval);
							return 0;
						} else if (oldMinutes === 0) {
							return 0;
						} else {
							return oldMinutes - 1;
						}
					});
					return oldSeconds === 0 ? clearInterval(timeInterval) : 60;
				} else if (oldSeconds !== undefined) {
					return oldSeconds - 1;
				}
			});
		}, 1000);
		console.log(`seconds = ${remainingSeconds}, minutes = ${remainingMinutes}`);
	}, []);

	return (
		<h1><Badge bg="primary">Time Remaining: {remainingMinutes} Minutes and {remainingSeconds} Seconds</Badge></h1>
	);
};
