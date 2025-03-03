import Footer from "./Footer";
import Nav from "./Nav";
import helpImage from "../assets/adminbotHelp.png";

export default function Help() {
  return (
    <>
      <Nav />
      <div className="px-[20vw] mt-[80px] flex flex-col gap-10 bg-black text-white">
        {/** Banner Image **/}
        <div className="flex justify-center mb-5">
          <img src={helpImage} alt="Help Banner" className="rounded-lg w-full" />
        </div>
        
        <div className="flex flex-col gap-4">
          <div className="text-4xl font-bold text-light-green-500">
            도움말
          </div>
          <div className="text-md">
            관리봇의 모든 명령어에 대한 설명입니다. <br />
          </div>
          <div className="p-5 bg-light-green-500 rounded-2xl">
            <div className="font-bold text-neutral-600">관리봇 도움말</div>
            일반명령어(!, {">"}, @관리봇)로도 사용하실 수 있습니다.
            <br />
          </div>
        </div>

        {/** Registration Features **/}
        <div className="flex flex-col gap-5">
          <div className="text-2xl font-bold text-light-green-500">
            👋 가입기능
          </div>
          <div className="bg-zinc-800 p-4 rounded-lg">
            <div className="flex items-start mb-3">
              <span className="font-bold text-light-green-400 mr-2">/가입</span>
              <span>- 관리봇 서비스에 가입합니다.</span>
            </div>
            <div className="flex items-start">
              <span className="font-bold text-light-green-400 mr-2">/탈퇴</span>
              <span>- 관리봇 서비스에서 탈퇴합니다.</span>
            </div>
          </div>
        </div>

        {/** Management Features **/}
        <div className="flex flex-col gap-5">
          <div className="text-2xl font-bold text-light-green-500">
            ✨ 관리기능
          </div>
          <div className="bg-zinc-800 p-4 rounded-lg">
            {[
              { command: "/청소 [메시지 수]", description: "채널에 있는 메시지를 [메시지 수] 만큼 삭제합니다." },
              { command: "/킥 [유저]", description: "[유저] 를 서버에서 추방합니다." },
              { command: "/밴 [유저]", description: "[유저] 를 서버에서 차단합니다." },
              { command: "/언밴 [유저]", description: "[유저] 를 서버에서 차단 해제합니다." },
              { command: "/뮤트 [유저]", description: "[유저] 를 뮤트합니다." },
              { command: "/언뮤트 [유저]", description: "[유저] 를 뮤트 해제합니다." },
              { command: "/타임아웃 [유저]", description: "[유저] 를 타임아웃 합니다." },
              { command: "/타임아웃해제 [유저]", description: "[유저] 의 타임아웃을 해제합니다." },
              { command: "/슬로우모드 [시간]", description: "채널의 슬로우모드를 [시간] 만큼 지정합니다." },
              { command: "/슬로우모드해제", description: "채널의 슬로우모드를 해제합니다." },
              { command: "/입퇴장채널 [#채널]", description: "봇의 입퇴장 메시지를 보낼 채널을 지정합니다." },
              { command: "/역할부여 [유저] [역할]", description: "[유저] 에게 [역할] 을 부여합니다." },
            ].map(({ command, description }, index) => (
              <div className="flex items-start mb-3" key={index}>
                <span className="font-bold text-light-green-400 mr-2">{command}</span>
                <span>- {description}</span>
              </div>
            ))}
          </div>
        </div>

        {/** Music Features **/}
        <div className="flex flex-col gap-5">
          <div className="text-2xl font-bold text-light-green-500">
            🎵 노래기능
          </div>
          <div className="bg-zinc-800 p-4 rounded-lg">
            {[
              { command: "/재생 [노래 제목]", description: "[노래 제목] 을 재생합니다." },
              { command: "/대기열추가 [노래 제목]", description: "[노래 제목] 을 대기열에 추가합니다." },
              { command: "/정지", description: "현재 재생 중인 노래를 정지하고 다음노래를 재생합니다." },
              { command: "/재생목록", description: "현재 대기열을 확인합니다." },
              { command: "/멜론차트", description: "멜론차트 TOP 100을 확인합니다" },
            ].map(({ command, description }, index) => (
              <div className="flex items-start mb-3" key={index}>
                <span className="font-bold text-light-green-400 mr-2">{command}</span>
                <span>- {description}</span>
              </div>
            ))}
          </div>
        </div>

        {/** Stock Features **/}
        <div className="flex flex-col gap-5">
          <div className="text-2xl font-bold text-light-green-500">
            📊 주식 기능
          </div>
          <div className="bg-zinc-800 p-4 rounded-lg">
            {[
              { command: "/주식시장", description: "현재 주식시장을 확인합니다." },
              { command: "/매수 [종목] [수량]", description: "주식을 매수합니다." },
              { command: "/매도 [종목] [수량]", description: "주식을 매도합니다." },
              { command: "/보유주식", description: "보유주식을 확인합니다." },
            ].map(({ command, description }, index) => (
              <div className="flex items-start mb-3" key={index}>
                <span className="font-bold text-light-green-400 mr-2">{command}</span>
                <span>- {description}</span>
              </div>
            ))}
          </div>
        </div>

        {/** Game Features **/}
        <div className="flex flex-col gap-5">
          <div className="text-2xl font-bold text-light-green-500">
            🎲 게임 기능
          </div>
          <div className="bg-zinc-800 p-4 rounded-lg">
            {[
              { command: "/주사위", description: "랜덤으로 주사위를 굴립니다." },
              { command: "/가위바위보 [가위/바위/보]", description: "봇과 가위바위보 대결을 합니다." },
              { command: "/도박 [금액]", description: "돈을 걸고 도박을 합니다." },
            ].map(({ command, description }, index) => (
              <div className="flex items-start mb-3" key={index}>
                <span className="font-bold text-light-green-400 mr-2">{command}</span>
                <span>- {description}</span>
              </div>
            ))}
          </div>
        </div>

        {/** Leveling Features **/}
        <div className="flex flex-col gap-5">
          <div className="text-2xl font-bold text-light-green-500">
            📱 레벨링 기능
          </div>
          <div className="bg-zinc-800 p-4 rounded-lg">
            {[
              { command: "/레벨확인", description: "현재 레벨과 XP를 확인합니다." },
              { command: "/랭킹", description: "서버 레벨 랭킹을 확인합니다." },
            ].map(({ command, description }, index) => (
              <div className="flex items-start mb-3" key={index}>
                <span className="font-bold text-light-green-400 mr-2">{command}</span>
                <span>- {description}</span>
              </div>
            ))}
          </div>
        </div>

        {/** Other Features **/}
        <div className="flex flex-col gap-5 mb-10">
          <div className="text-2xl font-bold text-light-green-500">
            🔧 기타 기능
          </div>
          <div className="bg-zinc-800 p-4 rounded-lg">
            {[
              { command: "/봇정보", description: "관리봇의 정보를 확인합니다." },
              { command: "/서버정보", description: "서버정보를 확인합니다." },
              { command: "/하트인증", description: "한국 디스코드 리스트 하트인증을 진행하고 보상을 받습니다." },
            ].map(({ command, description }, index) => (
              <div className="flex items-start mb-3" key={index}>
                <span className="font-bold text-light-green-400 mr-2">{command}</span>
                <span>- {description}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}