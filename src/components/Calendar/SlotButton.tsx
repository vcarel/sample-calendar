import { clsx } from "clsx";
import { type FC, useState } from "react";
import { formatHourMinute } from "src/helpers/formatters";

type Props = {
	className?: string;
	time?: Date;
};

const SlotButton: FC<Props> = ({ className, time }) => {
	const [clickCount, setClickCount] = useState(0);

	const onClick = () => {
		setClickCount((prev) => (prev + 1) % 3);
	};

	return (
		<button
			className={clsx(
				className,
				"w-24 rounded-md bg-gray-100 py-2 text-center text-gray-700 ",
				clickCount === 0 && "bg-gray-100 hover:bg-gray-700 hover:text-white",
				clickCount === 1 && "bg-green-700 text-white hover:bg-green-700",
				clickCount === 2 && "bg-blue-700 text-white hover:bg-blue-700",
			)}
			onClick={onClick}
			type="button"
		>
			{time ? formatHourMinute(time) : "-"}
		</button>
	);
};

export default SlotButton;
