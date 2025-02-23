import {
	ChartLine,
	ChartNoAxesCombined,
	CircleDollarSign,
	Dices,
	Music2,
	Wrench,
} from "lucide-react";
import Nav from "./Nav";
import Footer from "./Footer";
import Card from "./Card";

export default function App() {
	return (
		<>
			<Nav />
			<div className="landing pt-50 overflow-visible">
				<div className="flex flex-col items-center">
					<div className="text-5xl sm:text-6xl font-bold text-center text-neutral-800">
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
					<div className="w-[70vw] max-w-[1080px] max-h-[608px] h-[calc(70vw/2)] mt-10 bg-light-green-500 rounded-2xl overflow-hidden">
						<iframe
							width="100%"
							height="100%"
							src="https://www.youtube.com/embed/JkqhIXtExIY?autoplay=1&mute=1&loop=1&color=white&controls=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1&fs=0&showinfo=0"
							title="YouTube video player"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							referrerPolicy="strict-origin-when-cross-origin"
						></iframe>
					</div>
				</div>
			</div>
			<div className="mt-80 flex flex-col items-center">
				<div className="text-4xl font-bold text-center text-neutral-800">
					올인원 디스코드봇
				</div>
				<div className="flex flex-row flex-wrap w-full gap-5 mt-12 max-w-[1260px] justify-center">
					<Card
						title="노래"
						desc="멜론차트, 유튜브 노래 검색, 재생목록으로 다양한 음악을 즐길
					수 있어요!"
						icon={<Music2 />}
					/>
					<Card
						title="경제"
						desc="돈을 모아서 때부자가 되어보자구요."
						icon={<CircleDollarSign />}
					/>
					<Card
						title="주식"
						desc="시시각각 변하는 주식 시장에서 얼마나 큰 돈을 따낼 수 있을까요?"
						icon={<ChartNoAxesCombined />}
					/>
					<Card
						title="관리"
						desc="밴 킥 뮤트 채널 슬로우 챗 등 다양한 기능을 간편하게 써보세요!"
						icon={<Wrench />}
					/>
					<Card
						title="게임"
						desc="가위, 바위, 보! 이번엔 제가 이겼네요!😎"
						icon={<Dices />}
					/>
					<Card
						title="레벨"
						desc="다른 유저들보다 얼마나 많은 레벨을 쌓을 수 있나요? 채팅을 쳐서 레벨을 올려보세요!"
						icon={<ChartLine />}
					/>
				</div>
			</div>
			<div className="mt-10 flex flex-col items-center">
				<div className="mt-20 card max-w-[1080px] w-screen px-4 sm:w-[70vw] py-10 sm:py-20 sm:rounded-2xl flex flex-col items-center justify-center gap-8">
					<div className="text-center text-3xl sm:text-4xl text-neutral-800 font-bold">
						더이상 무슨봇을 사용할지 고민하지 말고
						<br />
						관리봇을 초대하세요!
					</div>
					<div className="flex flex-row gap-2 sm:gap-5 w-full justify-center flex-wrap">
						<button
							className="w-[200px] border border-light-green-200 hover:light-green-100 bg-light-green-200 py-4.5 text-neutral-100 rounded-2xl cursor-pointer hover:bg-light-green-100 duration-300"
							onClick={() => {
								window.open(
									"https://discord.com/oauth2/authorize?client_id=1336244578747154473"
								);
							}}
						>
							초대하기
						</button>
						<button
							className="w-[200px] text-neutral-700 py-4.5  bg-light-green-500 cursor-pointer hover:bg-light-green-400 duration-300 rounded-2xl"
							onClick={() => {
								window.open(
									"https://discord.com/invite/zksAdcYeR7"
								);
							}}
						>
							디스코드 서버에 참여하기
						</button>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}
