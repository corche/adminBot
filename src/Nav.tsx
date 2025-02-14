import { useEffect, useState } from "react";

export default function Nav() {
	const [scroll, setScroll] = useState(false);

	const handleScroll = () => {
		if (window.scrollY >= 50) {
			setScroll(true);
		} else {
			setScroll(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			<div
				className={`${
					scroll
						? "w-[60vw] bg-white/30 backdrop-blur-xl mt-2"
						: "w-[100vw] bg-white/0 px-[5vw]"
				} fixed top-0 px-2 rounded-2xl h-[60px] flex justify-between items-center duration-500 ml-[50vw] translate-x-[-50%]`}
			>
				<div className="text-2xl ml-6 font-bold text-neutral-800">
					관리봇
				</div>
				<div className="text-base flex w-[200px]">
					<div
						className={`cursor-pointer w-[100px] text-center text-light-green-100 relative after:absolute after:bottom-0 after:left-[50%] after:translate-x-[-50%] after:rounded-2xl after:w-[20px] after:h-[2px] after:bg-light-green-200`}
					>
						홈
					</div>
					<div className={`cursor-pointer w-[100px] text-center`}>
						도움말
					</div>
				</div>
				<button className="cursor-pointer w-[100px] h-[42px] flex items-center justify-center text-base text-neutral-100 bg-light-green-200 hover:bg-light-green-100 rounded-xl duration-200">
					초대하기
				</button>
			</div>
		</>
	);
}
