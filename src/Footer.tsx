export default function Footer() {
	return (
		<div className="h-60 bg-light-green-500 justify-center mt-40">
			<div className="w-[90vw] sm:w-[70vw] max-w-[1080px] flex justify-between ml-[50%] translate-x-[-50%] py-15">
				<div className="flex flex-col ml-10">
					<div className="text-3xl text-neutral-800 font-bold">
						관리봇
					</div>
					<div className="text-sm max-w-50 sm:max-w-auto mt-2">
						Copyright Yangpa 2025 All Right Reserved.
					</div>
				</div>
				<div className="flex flex-col gap-0.5 mr-[40px]">
					<div className="cursor-pointer text-sm hover:text-neutral-600 underline">
						홈
					</div>
					<div
						className="cursor-pointer text-sm hover:text-neutral-600 underline"
						onClick={() => {
							window.open(
								"https://discord.com/oauth2/authorize?client_id=1336244578747154473"
							);
						}}
					>
						초대하기
					</div>
					<div
						className="cursor-pointer text-sm hover:text-neutral-600 underline"
						onClick={() => {
							window.open(
								"https://adminbot-help.notion.site/1a428761e9ef805dbddfcc9af68dd8c4?pvs=74"
							);
						}}
					>
						도움말
					</div>
					<div
						className="cursor-pointer text-sm hover:text-neutral-600 underline"
						onClick={() => {
							window.open(
								"https://discord.com/invite/zksAdcYeR7"
							);
						}}
					>
						서포트 서버
					</div>
				</div>
			</div>
		</div>
	);
}
