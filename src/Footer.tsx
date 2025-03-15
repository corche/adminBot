import { useNavigate } from "react-router-dom";
export default function Footer() {
	const navigation = useNavigate();

	return (
		<div className="bg-light-green-500 py-20 flex justify-center">
			<div className="w-[90vw] sm:w-[70vw] max-w-[1080px] flex justify-between">
				<div className="flex flex-col">
					<div className="text-3xl text-neutral-800 font-bold">
						가디봇
					</div>
					<div className="text-sm mt-2">
						Copyright Yangpa 2025 All Right Reserved.
					</div>
				</div>
				<div className="flex flex-col gap-2">
					<div
						className="cursor-pointer text-sm hover:text-neutral-600 underline"
						onClick={() => navigation("/")}
					>
						홈
					</div>
					<div
						className="cursor-pointer text-sm hover:text-neutral-600 underline"
						onClick={() =>
							window.open(
								"https://discord.com/oauth2/authorize?client_id=1336244578747154473"
							)
						}
					>
						초대하기
					</div>
					<div
						className="cursor-pointer text-sm hover:text-neutral-600 underline"
						onClick={() => navigation("/help")}
					>
						도움말
					</div>
					<div
						className="cursor-pointer text-sm hover:text-neutral-600 underline"
						onClick={() =>
							window.open("https://discord.com/invite/zksAdcYeR7")
						}
					>
						서포트 서버
					</div>
					<div
						className="cursor-pointer text-sm hover:text-neutral-600 underline"
						onClick={() => navigation("/tos")}
					>
						서비스 이용약관
					</div>
					<div
						className="cursor-pointer text-sm hover:text-neutral-600 underline"
						onClick={() => navigation("/privacy")}
					>
						개인정보 처리방침
					</div>
				</div>
			</div>
		</div>
	);
}