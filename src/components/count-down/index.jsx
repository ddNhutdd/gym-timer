import { useEffect, useRef, useState } from 'react';

const CountDown = function () {
	const [time, setTime] = useState(0);
	let idInterval;

	const calcTime = () => {
		let value = 10;
		return () => {
			idInterval = setInterval(() => {
				value--;
				if (value >= 0) {
					setTime(value);
				} else {
					setTime(0);
					clearInterval(idInterval);
				}
			}, 1000);
		}
	}

	useEffect(() => {
		const start = calcTime();
		start();

		return () => {
			clearInterval(idInterval);
		}
	}, [])

	return (<span>{time}</span>)
}

export default CountDown