import clsx from "clsx";
import type { FC } from "react";

interface Props {
	className?: string;
	disabled?: boolean;
	direction: "prev" | "next";
	onClick: () => void;
}

const NavButton: FC<Props> = ({ className, disabled, direction, onClick }) => (
	<button
		className={clsx(
			className,
			"flex h-8 w-8 items-center justify-center rounded-md bg-gray-200 text-sm",
			disabled && "cursor-not-allowed opacity-50",
		)}
		disabled={disabled}
		onClick={onClick}
		type="button"
	>
		{direction === "next" && ">"}
		{direction === "prev" && "<"}
	</button>
);

export default NavButton;
