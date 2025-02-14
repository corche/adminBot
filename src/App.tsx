import Nav from "./Nav";

export default function App() {
	return (
		<>
			<Nav />
			<div className="landing pt-50 overflow-visible">
				<div className="flex flex-col items-center">
					<div className="text-6xl font-bold text-center text-neutral-800">
						디스코드에 필요한 기능을
						<br />단 <span className="accent font-bold">하나</span>
						로.
					</div>
					<div className="text-lg text-center mt-5 leading-6">
						그동안 유저를 관리하는데 골치가 아프셨나요? 아니면 악질
						유저가 괴롭힌다던지요.
						<br />
						아니면 친구가 서버에 왜이렇게 할게 없냐고 불평불만 하진
						않았나요?
						<br />
						더이상 귀찮게 이봇 저봇 추가하지 말고 관리봇 하나로
						해결하세요!
					</div>
					<div className="w-[70vw] max-w-[1080px] h-[calc(70vw/2)] mt-10 bg-light-green-500 rounded-2xl"></div>
				</div>
			</div>
			<div className="h-screen">
				<div className="text-4xl font-bold text-center text-neutral-800">
					올인원 디스코드봇
				</div>
			</div>
		</>
	);
}
