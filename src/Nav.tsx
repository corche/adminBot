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
						? "w-[90vw] sm:w-[70vw] lg:w-[50vw] bg-white/60 backdrop-blur-xl mt-5 border border-neutral-300/30"
						: "w-[100vw] bg-white/0 sm:px-[10vw] border border-white/0"
				} fixed top-0 px-2 rounded-2xl h-[60px] flex justify-between items-center duration-500 ml-[50vw] translate-x-[-50%] z-10 max-w-[1500px]`}
			>
				<div className="text-2xl ml-6 font-bold text-neutral-800 w-[80px] flex gap-1 items-center">
					<img src="adminBot.ico" width={30} height={30} />
					관리봇
				</div>
				<div className="hidden text-base sm:flex justify-between w-[calc(100%-300px)] max-w-[50%] sm:max-w-[300px]">
					<div
						className={`cursor-pointer text-center hover:text-light-green-200`}
						onClick={() => {
							window.open(
								"https://discord.com/invite/zksAdcYeR7"
							);
						}}
					>
						서포트 서버
					</div>
					<div
						className={`cursor-pointer text-center text-light-green-200 relative after:absolute after:bottom-0 after:left-[50%] after:translate-x-[-50%] after:rounded-2xl after:w-[20px] after:h-[2px] after:bg-light-green-200 hover:text-light-green-200`}
					>
						홈
					</div>
					<div
						className={`cursor-pointer text-center hover:text-light-green-200`}
						onClick={() => {
							window.open(
<<<<<<< HEAD
								"http://adminbot.kro.kr/helpAdminbot/"
=======
								"https://adminbot-help.notion.site/1a428761e9ef805dbddfcc9af68dd8c4?pvs=74"
>>>>>>> d40e44288a6ef1a4504e3d805d3ec9219d0d247d
							);
						}}
					>
						도움말
					</div>
				</div>
				<div className="flex items-center justify-center gap-1">
					<button
						className="cursor-pointer w-[100px] h-[42px] flex items-center justify-center text-base text-neutral-100 bg-light-green-200 hover:bg-light-green-100 rounded-xl duration-200"
						onClick={() => {
							window.open(
								"https://discord.com/oauth2/authorize?client_id=1336244578747154473"
							);
						}}
					>
						초대하기
					</button>
				</div>
			</div>
		</>
	);
}
