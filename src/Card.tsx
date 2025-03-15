import { ReactElement } from "react";

interface CardInterface {
	title: string;
	desc: string;
	icon: ReactElement;
	_class?: string;
}

export default function Card({
	title,
	desc,
	icon,
	_class = "",
}: CardInterface) {
	return (
		<div
			className={`flex items-center gap-4 **:text-neutral-800 py-6 px-9 bg-light-brown-500 rounded-2xl w-80 sm:w-100 ${_class}`}
		>
			<div className="pr-2 flex items-center justify-center">{icon}</div>
			<div className="flex flex-col">
				<div className="mt-1 text-xl font-bold">{title}</div>
				<div className="mt-1 !text-neutral-500">{desc}</div>
			</div>
		</div>
	);
}
