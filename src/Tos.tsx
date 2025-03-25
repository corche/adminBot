import Footer from "./Footer";
import Nav from "./Nav";
import tosImage from "../assets/guardi.png";

export default function Tos() {
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
            <img src={tosImage} alt="가디" style={{ width: "200px", height: "auto" }} />
          </div>
          
          {/* 이용약관 헤더 */}
          <div className="flex flex-col gap-4">
            <div className="text-4xl font-bold text-brown-600 text-center">
              가디 서비스 이용약관
            </div>
          </div>

          {/* 제1조 */}
          <div className="flex flex-col gap-5">
            <div className="text-2xl font-bold text-brown-600">
              제1조 (목적)
            </div>
            <div className="bg-white bg-opacity-50 p-4 rounded-lg shadow-sm">
              <p>본 이용약관(이하 "약관")은 가디(이하 "서비스")를 제공하는 Team Guard(이하 "팀")와 이를 이용하는 사용자(이하 "사용자") 간의 권리와 의무, 책임사항 및 기타 필요한 사항을 규정함을 목적으로 합니다.</p>
            </div>
          </div>

          {/* 제2조 */}
          <div className="flex flex-col gap-5">
            <div className="text-2xl font-bold text-brown-600">
              제2조 (용어의 정의)
            </div>
            <div className="bg-white bg-opacity-50 p-4 rounded-lg shadow-sm">
              <ol className="list-decimal pl-5 space-y-2">
                <li>"서비스"란 디스코드 플랫폼에서 제공되는 가디를 의미합니다.</li>
                <li>"사용자"란 디스코드 계정을 통해 본 서비스를 이용하는 모든 개인 또는 단체를 의미합니다.</li>
                <li>"디스코드 서버"란 디스코드 플랫폼 내에서 사용자들이 모여 소통할 수 있는 공간을 의미합니다.</li>
              </ol>
            </div>
          </div>

          {/* 제3조 */}
          <div className="flex flex-col gap-5">
            <div className="text-2xl font-bold text-brown-600">
              제3조 (약관의 효력 및 변경)
            </div>
            <div className="bg-white bg-opacity-50 p-4 rounded-lg shadow-sm">
              <ol className="list-decimal pl-5 space-y-2">
                <li>본 약관은 서비스를 이용하고자 하는 모든 사용자에게 적용됩니다.</li>
                <li>팀은 필요한 경우 약관을 변경할 수 있으며, 변경된 약관은 서비스 내 공지사항 또는 기타 방법을 통해 사용자에게 공지합니다.</li>
                <li>사용자가 변경된 약관에 동의하지 않는 경우, 서비스 이용을 중단해야 합니다. 변경된 약관 공지 후 계속해서 서비스를 이용하는 경우, 사용자는 변경된 약관에 동의한 것으로 간주됩니다.</li>
              </ol>
            </div>
          </div>

          {/* 제4조 */}
          <div className="flex flex-col gap-5">
            <div className="text-2xl font-bold text-brown-600">
              제4조 (서비스 이용 대상)
            </div>
            <div className="bg-white bg-opacity-50 p-4 rounded-lg shadow-sm">
              <ol className="list-decimal pl-5 space-y-2">
                <li>본 서비스는 디스코드 이용약관에 따라 13세 이상의 사용자만 이용할 수 있습니다.</li>
                <li>본 서비스는 대한민국 내에서만 제공됩니다.</li>
              </ol>
            </div>
          </div>

          {/* 제5조 */}
          <div className="flex flex-col gap-5">
            <div className="text-2xl font-bold text-brown-600">
              제5조 (서비스 내용)
            </div>
            <div className="bg-white bg-opacity-50 p-4 rounded-lg shadow-sm">
              <p>가디는 다음과 같은 기능을 제공합니다:</p>
              <ol className="list-decimal pl-5 mt-2 space-y-2">
                <li>
                  <p className="font-semibold">서버 관리 기능</p>
                  <ul className="list-disc pl-5">
                    <li>메시지 청소</li>
                    <li>채널 슬로우모드 설정/해제</li>
                  </ul>
                </li>
                <li>
                  <p className="font-semibold">유저 관리 기능</p>
                  <ul className="list-disc pl-5">
                    <li>킥, 벤, 뮤트, 언뮤트</li>
                    <li>타임아웃, 타임아웃 해제</li>
                    <li>역할 부여</li>
                  </ul>
                </li>
                <li>
                  <p className="font-semibold">AI 채팅 기능</p>
                  <ul className="list-disc pl-5">
                    <li>일반 대화 기능</li>
                    <li>사용자 지식 학습 기능(/배워 명령어)</li>
                  </ul>
                </li>
                <li>
                  <p className="font-semibold">게임 기능</p>
                  <ul className="list-disc pl-5">
                    <li>주사위</li>
                    <li>가위바위보</li>
                    <li>도박</li>
                  </ul>
                </li>
                <li>
                  <p className="font-semibold">기타 기능</p>
                  <ul className="list-disc pl-5">
                    <li>레벨링 기능</li>
                    <li>주식 기능</li>
                    <li>경제 기능</li>
                    <li>학교 기능</li>
                    <li>서버 정보/봇 정보 확인</li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>

          {/* 제6조 */}
          <div className="flex flex-col gap-5">
            <div className="text-2xl font-bold text-brown-600">
              제6조 (서비스 이용)
            </div>
            <div className="bg-white bg-opacity-50 p-4 rounded-lg shadow-sm">
              <ol className="list-decimal pl-5 space-y-2">
                <li>본 서비스는 무료로 제공됩니다.</li>
                <li>사용자는 디스코드 서버에 봇을 초대하는 방식으로 서비스 이용을 시작할 수 있습니다.</li>
                <li>사용자는 서비스 이용 중 발생하는 모든 활동에 대한 책임을 집니다.</li>
              </ol>
            </div>
          </div>

          {/* 제7조 */}
          <div className="flex flex-col gap-5">
            <div className="text-2xl font-bold text-brown-600">
              제7조 (개인정보 수집 및 관리)
            </div>
            <div className="bg-white bg-opacity-50 p-4 rounded-lg shadow-sm">
              <ol className="list-decimal pl-5 space-y-2">
                <li>
                  <p>팀은 서비스 제공을 위해 다음과 같은 정보를 수집합니다:</p>
                  <ul className="list-disc pl-5 mt-1">
                    <li>서버 이름, 서버 ID</li>
                    <li>서버 내의 채널 이름, 채널 ID</li>
                    <li>유저 닉네임, 유저 ID</li>
                    <li>유저의 봇 사용 기록</li>
                    <li>서버에서의 봇 사용 기록</li>
                    <li>등록한 학교 정보</li>
                  </ul>
                </li>
                <li>
                  <p>수집된 개인정보는 다음 목적으로만 사용됩니다:</p>
                  <ul className="list-disc pl-5 mt-1">
                    <li>로그 조회를 통한 오류 해결</li>
                    <li>봇 악용 사례 적발 및 블랙리스트 관리</li>
                    <li>문의자 분류 및 대응</li>
                    <li>학교 기능들 제공</li>
                  </ul>
                </li>
                <li>팀은 수집한 개인정보를 제3자에게 제공하지 않습니다.</li>
                <li>개인정보는 서비스 가입 즉시 수집되며, 사용자가 서비스를 탈퇴하는 경우 즉시 파기됩니다.</li>
                <li>서비스 중단 또는 해지 시, 가입되어 있는 모든 사용자의 개인정보는 사용자의 별도 탈퇴 요청 없이도 자동으로 파기됩니다.</li>
              </ol>
            </div>
          </div>

          {/* 제8조 */}
          <div className="flex flex-col gap-5">
            <div className="text-2xl font-bold text-brown-600">
              제8조 (사용자 콘텐츠)
            </div>
            <div className="bg-white bg-opacity-50 p-4 rounded-lg shadow-sm">
              <ol className="list-decimal pl-5 space-y-2">
                <li>사용자는 /배워 명령어를 통해 봇에게 지식을 가르칠 수 있습니다.</li>
                <li>/배워 명령어로 가르친 지식에 대한 책임과 소유권은 모두 해당 명령어를 사용한 사용자에게 있습니다.</li>
                <li>부적절한 단어 학습 시도는 시스템에 의해 차단될 수 있으며, 차단을 우회하여 부적절한 단어를 학습시킨 경우 해당 사용자는 단어의 수위에 따라 결정된 기간 동안 서비스 이용이 제한될 수 있습니다.</li>
                <li>
                  <p>팀은 사용자가 생성한 콘텐츠가 다음에 해당한다고 판단되는 경우 사전 통지 없이 삭제할 수 있습니다:</p>
                  <ul className="list-disc pl-5 mt-1">
                    <li>타인의 권리를 침해하는 콘텐츠</li>
                    <li>불법적이거나 공서양속에 반하는 콘텐츠</li>
                    <li>서비스의 정상적인 운영을 방해하는 콘텐츠</li>
                    <li>기타 관련 법령에 위배되는 콘텐츠</li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>

          {/* 제9조 */}
          <div className="flex flex-col gap-5">
            <div className="text-2xl font-bold text-brown-600">
              제9조 (서비스 이용 제한)
            </div>
            <div className="bg-white bg-opacity-50 p-4 rounded-lg shadow-sm">
              <ol className="list-decimal pl-5 space-y-2">
                <li>
                  <p>팀은 다음 각 호에 해당하는 경우 사용자의 서비스 이용을 제한할 수 있습니다:</p>
                  <ul className="list-disc pl-5 mt-1">
                    <li>봇 기능 악용</li>
                    <li>부적절한 단어 학습</li>
                    <li>문의 과정에서 관리자에게 폭언/욕설 등 부적절한 행동을 한 경우</li>
                    <li>기타 본 약관을 위반하는 행위</li>
                  </ul>
                </li>
                <li>
                  <p>서비스 이용 제한 절차는 다음과 같습니다:</p>
                  <ul className="list-disc pl-5 mt-1">
                    <li>봇 답변으로 사용자에게 제한 사유 고지</li>
                    <li>위반 행위의 심각성에 따라 결정된 기간 동안 블랙리스트에 추가</li>
                    <li>블랙리스트 등재 기간 동안 봇 사용 불가</li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>

          {/* 제10조 */}
          <div className="flex flex-col gap-5">
            <div className="text-2xl font-bold text-brown-600">
              제10조 (면책 조항)
            </div>
            <div className="bg-white bg-opacity-50 p-4 rounded-lg shadow-sm">
              <ol className="list-decimal pl-5 space-y-2">
                <li>팀은 디스코드 플랫폼의 변경, 천재지변, 기술적 문제 등으로 인해 서비스가 일시적으로 중단될 수 있으며, 이로 인한 손해에 대해 책임을 지지 않습니다.</li>
                <li>사용자 간 또는 사용자와 제3자 간 분쟁 발생 시, 팀은 이에 개입할 의무가 없으며 이로 인한 손해에 대해 책임을 지지 않습니다.</li>
                <li>팀은 사용자가 서비스를 통해 제공받은 정보 또는 서비스에 대한 신뢰로 인해 발생한 손해에 대해 책임을 지지 않습니다.</li>
              </ol>
            </div>
          </div>

          {/* 제11조 */}
          <div className="flex flex-col gap-5">
            <div className="text-2xl font-bold text-brown-600">
              제11조 (준거법 및 관할)
            </div>
            <div className="bg-white bg-opacity-50 p-4 rounded-lg shadow-sm">
              <ol className="list-decimal pl-5 space-y-2">
                <li>본 약관은 대한민국 법률에 따라 규율되고 해석됩니다.</li>
                <li>서비스 이용과 관련하여 팀과 사용자 간 발생한 분쟁은 대한민국의 법령에 따라 해결합니다.</li>
              </ol>
            </div>
          </div>

          {/* 제12조 */}
          <div className="flex flex-col gap-5">
            <div className="text-2xl font-bold text-brown-600">
              제12조 (기타)
            </div>
            <div className="bg-white bg-opacity-50 p-4 rounded-lg shadow-sm">
              <ol className="list-decimal pl-5 space-y-2">
                <li>본 약관에 명시되지 않은 사항은 관련 법령 및 팀이 정한 정책에 따릅니다.</li>
                <li>문의사항이 있는 경우, 디스코드 내 Team Guard 공식 서버 또는 지정된 연락처를 통해 문의할 수 있습니다.</li>
              </ol>
            </div>
          </div>

          {/* 부칙 */}
          <div className="flex flex-col gap-5 mb-10">
            <div className="text-2xl font-bold text-brown-600">
              부칙
            </div>
            <div className="bg-white bg-opacity-50 p-4 rounded-lg shadow-sm">
              <p>본 약관은 2025년 2월 4일부터 시행합니다.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}