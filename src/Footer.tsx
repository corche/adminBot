import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Footer() {
  const navigate = useNavigate();
  
  // 내부 링크 이동 함수
  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0); // 페이지 상단으로 스크롤
  };
  
  // 외부 링크 이동 함수
  const handleExternalLink = (url: string) => {
    window.open(url);
  };

	return (
		<div className="bg-light-brown-500 py-20 flex justify-center">
			<div className="w-[90vw] sm:w-[70vw] max-w-[1080px] flex justify-between">
				<div className="flex flex-col">
					<div className="text-3xl text-neutral-800 font-bold">
						가디봇
					</div>
					<div className="text-sm mt-2">
						Copyright Team Guard 2025 All Right Reserved.
					</div>
				</div>
				<div className="flex flex-col gap-2">
					<div
						className="cursor-pointer text-sm hover:text-neutral-600 underline"
						onClick={() => handleNavigation("/")}
					>
						홈
					</div>
					<div
						className="cursor-pointer text-sm hover:text-neutral-600 underline"
						onClick={() =>
							handleExternalLink(
								"https://discord.com/oauth2/authorize?client_id=1336244578747154473"
							)
						}
					>
						초대하기
					</div>
					<div
						className="cursor-pointer text-sm hover:text-neutral-600 underline"
						onClick={() => handleNavigation("/help")}
					>
						도움말
					</div>
					<div
						className="cursor-pointer text-sm hover:text-neutral-600 underline"
						onClick={() =>
							handleExternalLink("https://discord.com/invite/zksAdcYeR7")
						}
					>
						서포트 서버
					</div>
					<div
						className="cursor-pointer text-sm hover:text-neutral-600 underline"
						onClick={() => handleNavigation("/tos")}
					>
						서비스 이용약관
					</div>
					<div
						className="cursor-pointer text-sm hover:text-neutral-600 underline"
						onClick={() => handleNavigation("/privacy")}
					>
						개인정보 처리방침
					</div>
				</div>
			</div>
		</div>
	);
}