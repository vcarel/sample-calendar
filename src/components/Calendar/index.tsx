import { addDays, startOfToday } from "date-fns";
import { range } from "es-toolkit";
import { useState } from "react";
import {
	formatDayShortMonth,
	formatHourMinute,
	formatShortWeekDay as formatShortDayOfWeek,
} from "src/helpers/formatters";
import { getRandomTimeList } from "src/helpers/slots";

const daysCount = 7;
const slotsCount = 10;

const Calendar = () => {
	const [firstDay, _setFirstDay] = useState(startOfToday());

	//  [date...]
	const days = range(daysCount).map((i) => addDays(firstDay, i));

	// [[time, ...]], [[time, ...]], etc.
	const daySlots = range(daysCount).map(() => getRandomTimeList(slotsCount));

	const formatSlotTime = (dayIndex: number, slotIndex: number) => {
		const time = daySlots[dayIndex]?.[slotIndex];
		return time ? formatHourMinute(time) : "-";
	};

	return (
		<div>
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
									<div className="w-24 rounded-md bg-slate-100 py-2 text-center text-gray-700">
										{formatSlotTime(dayIndex, slotIndex)}
									</div>
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Calendar;
