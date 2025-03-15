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
          
          {/* 개인정보 처리방침 헤더 */}
          <div className="flex flex-col gap-4">
            <div className="text-4xl font-bold text-brown-600 text-center">
              가디 개인정보 처리방침
            </div>
          </div>

          {/* 제1조 */}
          <div className="flex flex-col gap-5">
            <div className="text-2xl font-bold text-brown-600">
              제1조 (개인정보 처리방침의 목적)
            </div>
            <div className="bg-white bg-opacity-50 p-4 rounded-lg shadow-sm">
              <p>본 개인정보 처리방침은 Team Guard(이하 "팀")가 제공하는 가디(이하 "서비스")의 이용과 관련하여 사용자의 개인정보를 어떻게 수집, 이용, 보관, 파기하는지에 관한 정보를 제공하고, 사용자의 개인정보 보호 관련 권리와 의무를 안내하는 것을 목적으로 합니다.</p>
            </div>
          </div>

          {/* 제2조 */}
          <div className="flex flex-col gap-5">
            <div className="text-2xl font-bold text-brown-600">
              제2조 (수집하는 개인정보의 항목 및 수집 방법)
            </div>
            <div className="bg-white bg-opacity-50 p-4 rounded-lg shadow-sm">
              <ol className="list-decimal pl-5 space-y-2">
                <li>
                  <p>팀은 서비스 제공을 위해 다음과 같은 개인정보를 수집합니다:</p>
                  <ul className="list-disc pl-5 mt-1">
                    <li>서버 이름, 서버 ID</li>
                    <li>서버 내의 채널 이름, 채널 ID</li>
                    <li>유저 닉네임, 유저 ID</li>
                    <li>유저의 봇 사용 기록</li>
                    <li>서버에서의 봇 사용 기록</li>
                  </ul>
                </li>
                <li>
                  <p>개인정보 수집 방법:</p>
                  <ul className="list-disc pl-5 mt-1">
                    <li>디스코드 서버에 봇을 초대하는 과정에서 자동 수집</li>
                    <li>사용자가 봇을 사용하는 과정에서 자동 수집</li>
                    <li>디스코드 API를 통한 수집</li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>

          {/* 제3조 */}
          <div className="flex flex-col gap-5">
            <div className="text-2xl font-bold text-brown-600">
              제3조 (개인정보의 처리 목적)
            </div>
            <div className="bg-white bg-opacity-50 p-4 rounded-lg shadow-sm">
              <p>팀은 다음의 목적을 위해 개인정보를 처리합니다:</p>
              <ol className="list-decimal pl-5 mt-2 space-y-2">
                <li>
                  <p className="font-semibold">서비스 제공 및 운영</p>
                  <ul className="list-disc pl-5">
                    <li>서비스 기능 제공</li>
                    <li>서비스 이용 기록 관리</li>
                  </ul>
                </li>
                <li>
                  <p className="font-semibold">서비스 개선 및 관리</p>
                  <ul className="list-disc pl-5">
                    <li>로그 조회를 통한 오류 해결</li>
                    <li>서비스 품질 향상을 위한 통계 분석</li>
                  </ul>
                </li>
                <li>
                  <p className="font-semibold">사용자 관리</p>
                  <ul className="list-disc pl-5">
                    <li>봇 악용 사례 적발 및 블랙리스트 관리</li>
                    <li>문의자 분류 및 대응</li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>

          {/* 제4조 */}
          <div className="flex flex-col gap-5">
            <div className="text-2xl font-bold text-brown-600">
              제4조 (개인정보의 보유 및 이용 기간)
            </div>
            <div className="bg-white bg-opacity-50 p-4 rounded-lg shadow-sm">
              <ol className="list-decimal pl-5 space-y-2">
                <li>팀은 사용자의 개인정보를 서비스 이용 기간 동안 보유하고 이용합니다.</li>
                <li>
                  <p>개인정보는 다음의 경우에 파기됩니다:</p>
                  <ul className="list-disc pl-5 mt-1">
                    <li>사용자가 서비스를 탈퇴하는 경우: 즉시 파기</li>
                    <li>서비스가 중단 또는 해지되는 경우: 모든 사용자 정보 자동 파기</li>
                  </ul>
                </li>
                <li>관련 법령에 따라 보존이 필요한 경우, 해당 법령에서 정한 기간 동안 보관할 수 있습니다.</li>
              </ol>
            </div>
          </div>

          {/* 제5조 */}
          <div className="flex flex-col gap-5">
            <div className="text-2xl font-bold text-brown-600">
              제5조 (개인정보의 제3자 제공)
            </div>
            <div className="bg-white bg-opacity-50 p-4 rounded-lg shadow-sm">
              <p>팀은 사용자의 개인정보를 본 개인정보 처리방침에 명시된 범위를 초과하여 제3자에게 제공하지 않습니다. 다만, 다음의 경우에는 예외적으로 제3자에게 제공할 수 있습니다:</p>
              <ol className="list-decimal pl-5 mt-2 space-y-1">
                <li>사용자가 사전에 동의한 경우</li>
                <li>법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
              </ol>
            </div>
          </div>

          {/* 제6조 */}
          <div className="flex flex-col gap-5">
            <div className="text-2xl font-bold text-brown-600">
              제6조 (개인정보의 처리 위탁)
            </div>
            <div className="bg-white bg-opacity-50 p-4 rounded-lg shadow-sm">
              <p>현재 팀은 개인정보 처리를 외부에 위탁하고 있지 않습니다. 향후 개인정보 처리 업무를 위탁하는 경우, 본 개인정보 처리방침을 통해 위탁받는 자와 위탁하는 업무의 내용을 사용자에게 알리도록 하겠습니다.</p>
            </div>
          </div>

          {/* 제7조 */}
          <div className="flex flex-col gap-5">
            <div className="text-2xl font-bold text-brown-600">
              제7조 (사용자의 권리와 그 행사 방법)
            </div>
            <div className="bg-white bg-opacity-50 p-4 rounded-lg shadow-sm">
              <ol className="list-decimal pl-5 space-y-2">
                <li>
                  <p>사용자는 언제든지 자신의 개인정보에 대한 다음의 권리를 행사할 수 있습니다:</p>
                  <ul className="list-disc pl-5 mt-1">
                    <li>개인정보 열람 요구</li>
                    <li>개인정보 정정 및 삭제 요구</li>
                    <li>개인정보 처리정지 요구</li>
                  </ul>
                </li>
                <li>위 권리 행사는 디스코드 내 Team Guard 공식 서버를 통해 문의하거나, 지정된 연락처로 연락하여 요청할 수 있습니다.</li>
                <li>팀은 사용자의 권리 행사에 대한 요청을 받은 날로부터 10일 이내에 처리하고 그 결과를 사용자에게 통지합니다.</li>
              </ol>
            </div>
          </div>

          {/* 제8조 */}
          <div className="flex flex-col gap-5">
            <div className="text-2xl font-bold text-brown-600">
              제8조 (개인정보의 안전성 확보 조치)
            </div>
            <div className="bg-white bg-opacity-50 p-4 rounded-lg shadow-sm">
              <p>팀은 사용자의 개인정보를 보호하기 위해 다음과 같은 안전성 확보 조치를 취하고 있습니다:</p>
              <ol className="list-decimal pl-5 mt-2 space-y-2">
                <li>
                  <p className="font-semibold">관리적 조치</p>
                  <ul className="list-disc pl-5">
                    <li>개인정보 보호 책임자 지정</li>
                    <li>개인정보 취급자 최소화 및 교육</li>
                  </ul>
                </li>
                <li>
                  <p className="font-semibold">기술적 조치</p>
                  <ul className="list-disc pl-5">
                    <li>개인정보 저장 시스템에 대한 접근 제한</li>
                    <li>암호화 등을 통한 개인정보 보호</li>
                    <li>보안 프로그램 설치 및 주기적 점검</li>
                  </ul>
                </li>
                <li>
                  <p className="font-semibold">물리적 조치</p>
                  <ul className="list-disc pl-5">
                    <li>개인정보 보관 시스템에 대한 물리적 접근 제한</li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>

          {/* 제9조 */}
          <div className="flex flex-col gap-5">
            <div className="text-2xl font-bold text-brown-600">
              제9조 (개인정보 보호 책임자)
            </div>
            <div className="bg-white bg-opacity-50 p-4 rounded-lg shadow-sm">
              <p>팀은 개인정보 처리에 관한 업무를 총괄하고 개인정보 보호에 관한 책임을 다하기 위해 다음과 같이 개인정보 보호 책임자를 지정하고 있습니다:</p>
              <div className="mt-2 pl-5">
                <p>- 개인정보 보호 책임자: Team Guard 팀장</p>
                <p>- 연락처: [디스코드 공식 서버 또는 기타 연락처 정보]</p>
              </div>
            </div>
          </div>

          {/* 제10조 */}
          <div className="flex flex-col gap-5">
            <div className="text-2xl font-bold text-brown-600">
              제10조 (개인정보 처리방침의 변경)
            </div>
            <div className="bg-white bg-opacity-50 p-4 rounded-lg shadow-sm">
              <ol className="list-decimal pl-5 space-y-2">
                <li>본 개인정보 처리방침은 관련 법령 및 정책, 보안 기술의 변경에 따라 내용이 추가, 삭제 및 수정될 수 있습니다.</li>
                <li>팀은 개인정보 처리방침을 변경하는 경우 변경 사항을 서비스 내 공지사항 또는 기타 방법을 통해 사용자에게 공지합니다.</li>
                <li>변경된 개인정보 처리방침은 공지한 날로부터 효력이 발생합니다.</li>
              </ol>
            </div>
          </div>

          {/* 제11조 */}
          <div className="flex flex-col gap-5">
            <div className="text-2xl font-bold text-brown-600">
              제11조 (권익침해 구제방법)
            </div>
            <div className="bg-white bg-opacity-50 p-4 rounded-lg shadow-sm">
              <p>사용자는 개인정보 침해로 인한 구제를 받기 위해 개인정보 분쟁조정위원회, 한국인터넷진흥원 개인정보침해신고센터 등에 분쟁해결이나 상담을 신청할 수 있습니다.</p>
              <ol className="list-decimal pl-5 mt-2 space-y-1">
                <li>개인정보 분쟁조정위원회: 1833-6972 (www.kopico.go.kr)</li>
                <li>개인정보 침해신고센터: 118 (privacy.kisa.or.kr)</li>
                <li>대검찰청 사이버수사과: 1301 (www.spo.go.kr)</li>
                <li>경찰청 사이버안전국: 182 (cyberbureau.police.go.kr)</li>
              </ol>
            </div>
          </div>

          {/* 부칙 */}
          <div className="flex flex-col gap-5 mb-10">
            <div className="text-2xl font-bold text-brown-600">
              부칙
            </div>
            <div className="bg-white bg-opacity-50 p-4 rounded-lg shadow-sm">
              <p>본 개인정보 처리방침은 2025년 2월 4일부터 시행합니다.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}