export default function Nav() {
	return (
		<>
			<div className="w-screen bg-white/30 backdrop-blur-xl flex justify-between items-center h-[60px] fixed top-0 px-[10vw]">
				<div className="text-2xl font-bold text-neutral-800">
					관리봇
				</div>
				<div className="text-base flex w-[200px]">
					<div
						className={`cursor-pointer w-[100px] text-center text-light-green-100 relative after:absolute after:bottom-0 after:left-[50%] after:translate-x-[-50%] after:rounded-2xl after:w-[20px] after:h-[2px] after:bg-light-green-100`}
					>
						홈
					</div>
					<div className={`cursor-pointer w-[100px] text-center`}>
						도움말
					</div>
				</div>
				<button className="w-[100px] h-[42px] flex items-center justify-center text-base text-neutral-100 bg-light-green-100 rounded-xl">
					초대하기
				</button>
			</div>
		</>
	);
}
