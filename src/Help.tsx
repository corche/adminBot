import Footer from "./Footer";
import Nav from "./Nav";
import helpImage from "../assets/guardi.png";

export default function Help() {
  return (
    <>
      <Nav />
      {/* 이미지에 맞는 그라데이션 배경 적용 */}
      <div 
        className="min-h-screen w-full landing"
      >
        <div className="px-[20vw] pt-[80px] pb-10 flex flex-col gap-10 text-black">
          {/* 배너 이미지 */}
          <div className="flex justify-center mb-5">
            <img src={helpImage} alt="가디" style={{ width: "200px", height: "auto" }} />
          </div>
          
          {/* 도움말 헤더 */}
          <div className="flex flex-col gap-4">
            <div className="text-4xl font-bold text-brown-600">
              도움말
            </div>
            <div className="text-md">
              가디의 모든 명령어에 대한 설명입니다.
            </div>
            <div className="p-5 bg-white bg-opacity-50 rounded-2xl shadow-sm">
              <div className="font-bold text-gray-700">Prefix</div>
              빗금명령어(/)뿐만 아니라
              일반명령어(!, {">"}, @가디)로도 사용하실 수 있습니다.
            </div>
          </div>

          {/* 가입 */}
          <div className="flex flex-col gap-5">
            <div className="text-2xl font-bold text-brown-600">
              👋 가입/탈퇴
            </div>
            <div className="bg-white bg-opacity-50 p-4 rounded-lg shadow-sm">
              <div className="flex items-start mb-3">
                <span className="font-bold text-brown-600 mr-2">/가입</span>
                <span>- 가디 서비스에 가입합니다.</span>
              </div>
              <div className="flex items-start">
                <span className="font-bold text-brown-600 mr-2">/탈퇴</span>
                <span>- 가디 서비스에서 탈퇴합니다.</span>
              </div>
            </div>
          </div>

          {/* AI챗봇 */}
          <div className="flex flex-col gap-5">
            <div className="text-2xl font-bold text-brown-600">
              🤖 AI챗봇
              </div>
            <div className="bg-white bg-opacity-50 p-4 rounded-lg shadow-sm">
              {[
                { command: "가디야 [할말]", description: "가디와 자유롭게 대화할 수 있습니다." },
                { command: "/배워 [키워드|응답]", description: "가디에게 지식을 가르칩니다." },
              ].map(({ command, description }, index) => (
                <div className="flex items-start mb-3" key={index}>
                  <span className="font-bold text-brown-600 mr-2">{command}</span>
                  <span>- {description}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 관리 */}
          <div className="flex flex-col gap-5">
            <div className="text-2xl font-bold text-brown-600">
              ⚙️ 관리
            </div>
            <div className="bg-white bg-opacity-50 p-4 rounded-lg shadow-sm">
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
                { command: "/슬로우해제", description: "채널의 슬로우모드를 해제합니다." },
                { command: "/입퇴장채널 [채널]", description: "봇의 입퇴장 메시지를 보낼 채널을 지정합니다." },
                { command: "/역할부여 [유저] [역할]", description: "[유저] 에게 [역할] 을 부여합니다." },
              ].map(({ command, description }, index) => (
                <div className="flex items-start mb-3" key={index}>
                  <span className="font-bold text-brown-600 mr-2">{command}</span>
                  <span>- {description}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 티켓 */}
          <div className="flex flex-col gap-5">
            <div className="text-2xl font-bold text-brown-600">
              🎫 티켓
            </div>
            <div className="bg-white bg-opacity-50 p-4 rounded-lg shadow-sm">
              {[
                { command: "/티켓 설정", description: "티켓 시스템을 설정합니다." },
                { command: "/티켓 패널", description: "티켓 생성 패널을 만듭니다." },
                { command: "/티켓 목록", description: "모든 티켓 목록을 확인합니다." },
                { command: "/티켓 닫기", description: "티켓을 닫습니다." },
                { command: "/티켓 삭제", description: "티켓을 삭제합니다." },
                { command: "/티켓 대화내용", description: "티켓의 대화내용을 확인합니다." },
              ].map(({ command, description }, index) => (
                <div className="flex items-start mb-3" key={index}>
                  <span className="font-bold text-brown-600 mr-2">{command}</span>
                  <span>- {description}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 주식 */}
          <div className="flex flex-col gap-5">
            <div className="text-2xl font-bold text-brown-600">
              📊 주식
            </div>
            <div className="bg-white bg-opacity-50 p-4 rounded-lg shadow-sm">
              {[
                { command: "/주식시장", description: "현재 주식시장을 확인합니다." },
                { command: "/매수 [종목] [수량]", description: "주식을 매수합니다." },
                { command: "/매도 [종목] [수량]", description: "주식을 매도합니다." },
                { command: "/보유주식", description: "보유주식을 확인합니다." },
              ].map(({ command, description }, index) => (
                <div className="flex items-start mb-3" key={index}>
                  <span className="font-bold text-brown-600 mr-2">{command}</span>
                  <span>- {description}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 경제 */}
          <div className="flex flex-col gap-5">
            <div className="text-2xl font-bold text-brown-600">
              💰 경제
            </div>
            <div className="bg-white bg-opacity-50 p-4 rounded-lg shadow-sm">
              {[
                { command: "/돈벌기", description: "하루 2회, 랜덤으로 돈을 법니다" },
                { command: "/잔액", description: "현재 잔액을 확인합니다." },
                { command: "/송금 [유저] [금액]", description: "특정 유저에게 돈을 송금합니다." },
                { command: "/송금확인", description: "송금내역을 확인하고 수락합니다." },
                { command: "/송금내역", description: "최근 2주간의 모든 송금내역을 확인합니다." },
              ].map(({ command, description }, index) => (
                <div className="flex items-start mb-3" key={index}>
                  <span className="font-bold text-brown-600 mr-2">{command}</span>
                  <span>- {description}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 게임 */}
          <div className="flex flex-col gap-5">
            <div className="text-2xl font-bold text-brown-600">
              🎲 게임
            </div>
            <div className="bg-white bg-opacity-50 p-4 rounded-lg shadow-sm">
              {[
                { command: "/주사위 [금액]", description: "랜덤으로 주사위를 굴립니다." },
                { command: "/가위바위보", description: "봇과 가위바위보 대결을 합니다." },
                { command: "/도박 [금액]", description: "돈을 걸고 도박을 합니다." },
              ].map(({ command, description }, index) => (
                <div className="flex items-start mb-3" key={index}>
                  <span className="font-bold text-brown-600 mr-2">{command}</span>
                  <span>- {description}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 학교 */}
          <div className="flex flex-col gap-5">
            <div className="text-2xl font-bold text-brown-600">
              🏫 학교
            </div>
            <div className="bg-white bg-opacity-50 p-4 rounded-lg shadow-sm">
              {[
                { command: "/학교검색", description: "학교를 검색하고 등록합니다." },
                { command: "/학교변경", description: "등록한 학교를 가디 데이터베이스에서 제거합니다." },
                { command: "/학교정보", description: "등록한 학교의 정보를 조회합니다." },
                { command: "/급식", description: "특정 날짜의 급식을 조회합니다." },
                { command: "/시간표", description: "특정 날짜의 시간표를 조회합니다." },
              ].map(({ command, description }, index) => (
                <div className="flex items-start mb-3" key={index}>
                  <span className="font-bold text-brown-600 mr-2">{command}</span>
                  <span>- {description}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 레벨링 */}
          <div className="flex flex-col gap-5">
            <div className="text-2xl font-bold text-brown-600">
              📱 레벨링
            </div>
            <div className="bg-white bg-opacity-50 p-4 rounded-lg shadow-sm">
              {[
                { command: "/레벨확인", description: "현재 레벨과 XP를 확인합니다." },
                { command: "/랭킹", description: "서버 레벨 랭킹을 확인합니다." },
              ].map(({ command, description }, index) => (
                <div className="flex items-start mb-3" key={index}>
                  <span className="font-bold text-brown-600 mr-2">{command}</span>
                  <span>- {description}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 기타 */}
          <div className="flex flex-col gap-5 mb-10">
            <div className="text-2xl font-bold text-brown-600">
              🛠️ 기타
            </div>
            <div className="bg-white bg-opacity-50 p-4 rounded-lg shadow-sm">
              {[
                { command: "/봇정보", description: "가디의 정보를 확인합니다." },
                { command: "/서버정보", description: "서버정보를 확인합니다." },
                { command: "/하트인증", description: "한국 디스코드 리스트 하트인증을 진행하고 보상을 받습니다." },
              ].map(({ command, description }, index) => (
                <div className="flex items-start mb-3" key={index}>
                  <span className="font-bold text-brown-600 mr-2">{command}</span>
                  <span>- {description}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}