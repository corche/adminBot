import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigation = useNavigate();
  
  // 페이지 이동과 스크롤 상단 이동을 함께 처리하는 함수
  const navigateAndScrollTop = (path: string) => {
    navigation(path);
    window.scrollTo(0, 0);
  };
  
  // 외부 링크 열기와 스크롤 상단 이동을 함께 처리하는 함수
  const openLinkAndScrollTop = (url: string) => {
    window.open(url);
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-light-brown-500 py-20 flex justify-center">
      <div className="w-[90vw] sm:w-[70vw] max-w-[1080px] flex justify-between">
        <div className="flex flex-col">
          <div className="text-3xl text-neutral-800 font-bold">
            가디
          </div>
          <div className="text-sm mt-2">
            Copyright Yangpa 2025 All Right Reserved.
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div
            className="cursor-pointer text-sm hover:text-neutral-600 underline"
            onClick={() => navigateAndScrollTop("/")}
          >
            홈
          </div>
          <div
            className="cursor-pointer text-sm hover:text-neutral-600 underline"
            onClick={() =>
              openLinkAndScrollTop(
                "https://discord.com/oauth2/authorize?client_id=1336244578747154473"
              )
            }
          >
            초대하기
          </div>
          <div
            className="cursor-pointer text-sm hover:text-neutral-600 underline"
            onClick={() => navigateAndScrollTop("/help")}
          >
            도움말
          </div>
          <div
            className="cursor-pointer text-sm hover:text-neutral-600 underline"
            onClick={() =>
              openLinkAndScrollTop("https://discord.com/invite/zksAdcYeR7")
            }
          >
            서포트 서버
          </div>
          <div
            className="cursor-pointer text-sm hover:text-neutral-600 underline"
            onClick={() => navigateAndScrollTop("/tos")}
          >
            서비스 이용약관
          </div>
          <div
            className="cursor-pointer text-sm hover:text-neutral-600 underline"
            onClick={() => navigateAndScrollTop("/privacy")}
          >
            개인정보 처리방침
          </div>
        </div>
      </div>
    </div>
  );
}