import { addDays, startOfToday } from "date-fns";
import { range } from "es-toolkit";
import { useState } from "react";
import {
	formatDayShortMonth,
	formatShortWeekDay as formatShortDayOfWeek,
} from "src/helpers/formatters";
import { getRandomTimeList } from "src/helpers/slots";
import NavButton from "./NavButton";
import SlotButton from "./SlotButton";

const daysCount = 7;
const slotsCount = 10;

const Calendar = () => {
	const [firstDay, _setFirstDay] = useState(startOfToday());

	//  [date...]
	const days = range(daysCount).map((i) => addDays(firstDay, i));

	// [[time, ...]], [[time, ...]], etc.
	const daySlots = range(daysCount).map(() => getRandomTimeList(slotsCount));

	return (
		<div className="flex items-start gap-8">
			<NavButton
				disabled={firstDay.getTime() <= startOfToday().getTime()}
				className="mt-3"
				onClick={() => _setFirstDay(addDays(firstDay, -daysCount))}
				direction="prev"
			/>

			<table className="text-sm">
				<thead>
					<tr>
						{days.map((day) => (
							<th key={day.getTime()} className="py-2 text-center">
								<div className="text-gray-500">{formatShortDayOfWeek(day)}</div>
								<div className="font-medium">{formatDayShortMonth(day)}</div>
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{range(slotsCount).map((slotIndex) => (
						<tr key={`${firstDay.getTime()}:${slotIndex}`}>
							{days.map((day, dayIndex) => (
								<td key={day.getTime()} className="p-1 text-center">
									<SlotButton time={daySlots[dayIndex]?.[slotIndex]} />
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>

			<NavButton
				className="mt-3"
				onClick={() => _setFirstDay(addDays(firstDay, daysCount))}
				direction="next"
			/>
		</div>
	);
};

export default Calendar;
