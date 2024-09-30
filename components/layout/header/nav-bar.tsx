export default function HeaderNav() {
	return (
		<div className="flex">
			<div className="hidden sm:ml-6 sm:flex sm:space-x-8">
				<a
					href="#"
					className="inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-2xl font-medium text-gray-900"
				>
					홈
				</a>
				<a
					href="#"
					className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-2xl font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
				>
					선생님 찾기
				</a>
				<a
					href="#"
					className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-2xl font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
				>
					레슨 소개
				</a>
				<a
					href="#"
					className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-2xl font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
				>
					요금 안내
				</a>
			</div>
		</div>
	);
}
