import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Nav() {
	const select =
		"text-light-brown-200 relative after:absolute after:bottom-0 after:left-[50%] after:translate-x-[-50%] after:rounded-2xl after:w-[20px] after:h-[2px] after:bg-light-brown-200";

	const [scroll, setScroll] = useState(false);
	const [nowPath, setNowPath] = useState("/");

	const location = useLocation();
	const navigate = useNavigate();

	const handleScroll = () => {
		if (window.scrollY >= 50) {
			setScroll(true);
		} else {
			setScroll(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		setNowPath(location.pathname);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [location.pathname]);
	return (
		<>
			<div
				className={`${
					scroll
						? "w-[90vw] sm:w-[70vw] lg:w-[50vw] bg-white/60 backdrop-blur-xl mt-5 border border-neutral-300/30"
						: "w-[90vw] sm:w-[70vw] lg:w-[50vw] bg-white/0 border border-white/0"
				} fixed top-0 px-2 rounded-2xl h-[60px] flex justify-between items-center duration-500 ml-[50vw] translate-x-[-50%] z-10 max-w-[1500px]`}
			>
				<div className="text-2xl ml-6 font-bold text-neutral-800 w-[80px] flex gap-1 items-center">
					<img src="adminBot.ico" width={30} height={30} />
					가디
				</div>
				<div className="hidden text-base sm:flex justify-between w-[calc(100%-300px)] max-w-[50%] sm:max-w-[300px]">
					<div
						className={`cursor-pointer text-center hover:text-light-brown-200`}
						onClick={() => {
							window.open(
								"https://discord.com/invite/zksAdcYeR7"
							);
						}}
					>
						서포트 서버
					</div>
					<div
						className={`cursor-pointer text-center hover:text-light-brown-200 ${
							nowPath == "/" ? select : ""
						}`}
						onClick={() => {
							navigate("/");
						}}
					>
						홈
					</div>
					<div
						className={`cursor-pointer text-center hover:text-light-brown-200 ${
							nowPath == "/help" ? select : ""
						}`}
						onClick={() => {
							navigate("/help");
						}}
					>
						도움말
					</div>
				</div>
				<div className="flex items-center justify-center gap-1">
					<button
						className="cursor-pointer w-[100px] h-[42px] flex items-center justify-center text-base text-neutral-100 bg-light-brown-200 hover:bg-light-brown-100 rounded-xl duration-200"
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