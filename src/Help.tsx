import Footer from "./Footer";
import Nav from "./Nav";

export default function Help() {
	return (
		<>
			<Nav />
			<div className="px-[20vw] mt-[80px] flex flex-col gap-10">
				<div className="flex flex-col gap-4">
					<div className="text-4xl font-bold text-neutral-800">
						도움말
					</div>
					<div className="text-md">
						관리봇의 모든 명령어에 대한 설명입니다. <br />
					</div>
					<div className="p-5 bg-light-green-500 rounded-2xl">
						<div className="font-bold text-neutral-600">NOTE</div>
						일반명령어(!, {">"}, @관리봇)로도 사용하실 수 있습니다.
						<br />
						{"[]"} 는 필수 인자 {"()"} 는 선택 인자 입니다.
					</div>
				</div>

				<div className="flex flex-col gap-5">
					<div className="text-2xl font-bold text-neutral-800">
						👋 가입기능
					</div>
					<div className="cm">
						<span>/가입</span> - 봇의 원활한 사용을 위해
						가입해주세요!
					</div>
					<div className="cm">
						<span>/탈퇴</span> - 더이상 봇의 서비스를 사용하고 싶지
						않으시다면 탈퇴해주세요!
					</div>
				</div>
				<div className="flex flex-col gap-5">
					<div className="text-2xl font-bold text-neutral-800">
						✨ 관리기능
					</div>
					<div className="cm">
						<span>/청소</span> <span>[메시지 수]</span> - 채널에
						있는 메시지를 [메시지 수] 만큼 삭제합니다.
					</div>
					<div className="cm">
						<span>/킥</span> <span>[@유저]</span> - [@유저] 를
						서버에서 추방합니다.
					</div>
					<div className="cm">
						<span>/밴</span> <span>[@유저]</span> - [@유저] 를
						서버에서 차단합니다.
					</div>
					<div className="cm">
						<span>/언밴</span> <span>[@유저]</span> - [@유저] 를
						서버에서 차단 해제합니다.
					</div>
					<div className="cm">
						<span>/뮤트</span> <span>[@유저]</span> - [@유저] 를
						뮤트합니다.
					</div>
					<div className="cm">
						<span>/언뮤트</span> <span>[@유저]</span> - [@유저] 를
						뮤트 해제합니다.
					</div>
					<div className="cm">
						<span>/타임아웃</span> <span>[@유저]</span> - [@유저] 를
						타임아웃 합니다.
					</div>
					<div className="cm">
						<span>/타임아웃해제</span> <span>[@유저]</span> -
						[@유저] 의 타임아웃을 해제합니다.
					</div>
					<div className="cm">
						<span>/슬로우모드</span> <span>[시간]</span> - 채널의
						슬로우모드를 [시간] 만큼 지정합니다.
					</div>
					<div className="cm">
						<span>/슬로우모드해제</span> <span>[시간]</span> -
						채널의 슬로우모드를 해제합니다.
					</div>
					<div className="cm">
						<span>/입퇴장채널</span> <span>[#채널]</span> - 봇의
						입퇴장 메시지를 보낼 채널을 지정합니다.
					</div>
					<div className="cm">
						<span>/역할부여</span> <span>[@유저]</span>{" "}
						<span>[@역할]</span> - [@유저] 에게 [@역할] 을
						부여합니다.
					</div>
				</div>

				<div className="flex flex-col gap-5">
					<div className="text-2xl font-bold text-neutral-800">
						🎵 노래기능
					</div>
					<div className="cm">
						<span>/재생</span> <span>[노래 제목]</span> - [노래
						제목] 을 재생합니다.
					</div>
					<div className="cm">
						<span>/일시정지</span> - 현재 재생 중인 노래를
						일시정지합니다.
					</div>
					<div className="cm">
						<span>/다시재생</span> - 일시정지된 노래를 다시
						재생합니다.
					</div>
					<div className="cm">
						<span>/스킵</span> - 현재 재생 중인 노래를 건너뜁니다.
					</div>
					<div className="cm">
						<span>/정지</span> - 현재 재생 중인 노래를 정지합니다.
					</div>
					<div className="cm">
						<span>/목록</span> - 재생 목록을 표시합니다.
					</div>
					<div className="cm">
						<span>/반복</span> - 현재 재생 중인 노래를 반복
						재생합니다.
					</div>
					<div className="cm">
						<span>/반복해제</span> - 반복 재생을 해제합니다.
					</div>
				</div>

				<div className="flex flex-col gap-5">
					<div className="text-2xl font-bold text-neutral-800">
						📊 주식 기능
					</div>
					<div className="cm">
						<span>/주식시장</span> - 현재 주식시장을 확인합니다.
					</div>
					<div className="cm">
						<span>/매수</span> <span>[종목]</span>{" "}
						<span>[수량]</span> - 주식을 매수합니다.
					</div>
					<div className="cm">
						<span>/매도</span> <span>[종목]</span>{" "}
						<span>[수량]</span> - 주식을 매도합니다.
					</div>
					<div className="cm">
						<span>/보유주식</span> - 보유주식을 확인합니다.
					</div>
				</div>

				<div className="flex flex-col gap-5">
					<div className="text-2xl font-bold text-neutral-800">
						🎲 게임 기능
					</div>
					<div className="cm">
						<span>/주사위</span> - 랜덤으로 주사위를 굴립니다.
					</div>
					<div className="cm">
						<span>/가위바위보</span> <span>[가위/바위/보]</span> -
						봇과 가위바위보 대결을 합니다.
					</div>
					<div className="cm">
						<span>/도박</span> <span>[금액]</span> - 돈을 걸고
						도박을 합니다.
					</div>
				</div>

				<div className="flex flex-col gap-5">
					<div className="text-2xl font-bold text-neutral-800">
						📱 레벨링 기능
					</div>
					<div className="cm">
						<span>/레벨확인</span> - 현재 레벨과 XP를 확인합니다.
					</div>
					<div className="cm">
						<span>/랭킹</span> - 서버 레벨 랭킹을 확인합니다.
					</div>
				</div>

				<div className="flex flex-col gap-5">
					<div className="text-2xl font-bold text-neutral-800">
						🔧 기타 기능
					</div>
					<div className="cm">
						<span>/봇정보</span> - 관리봇의 정보를 확인합니다.
					</div>
					<div className="cm">
						<span>/서버정보</span> - 서버정보를 확인합니다.
					</div>
					<div className="cm">
						<span>/하트인증</span> - 한국 디스코드 리스트 하트인증을
						진행하고 보상을 받습니다.
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}
