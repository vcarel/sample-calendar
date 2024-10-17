import { add, startOfToday } from "date-fns";

const getRandomTime = () => {
	const baseDate = startOfToday();

	const hours = Math.floor(Math.random() * 12) + 8; // 10 hours range starting from 8am
	const minutes = Math.random() < 0.5 ? 0 : 30;

	return add(baseDate, { hours: hours, minutes: minutes });
};

export const getRandomTimeList = (maxCount: number) => {
	const count = Math.floor(Math.random() * maxCount) + 1;
	const timesSet = new Set<number>();

	while (timesSet.size < count) {
		timesSet.add(getRandomTime().getTime());
	}

	return Array.from(timesSet)
		.sort()
		.map((timestamp) => new Date(timestamp));
};
