"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LandingPage() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	return (
		<main className="pt-16">
			<motion.section
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
				transition={{ duration: 0.5 }}
				className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24"
			>
				<div className="text-center">
					<h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
						<span className="block">음악의 세계를 열다</span>
						<span className="block text-indigo-600">On-Lesson과 함께</span>
					</h1>
					<p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
						물리적 거리의 한계를 넘어, 최고의 선생님과 열정적인 학생들을
						연결합니다. 언제 어디서나, 당신의 음악 여정을 시작하세요.
					</p>
					<div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
						<div className="rounded-md shadow">
							<motion.a
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								href="#"
								className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
							>
								무료로 시작하기
							</motion.a>
						</div>
						<div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
							<motion.a
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								href="#"
								className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
							>
								자세히 알아보기
							</motion.a>
						</div>
					</div>
				</div>
			</motion.section>

			<section id="features" className="py-12 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="lg:text-center">
						<h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
							특징
						</h2>
						<p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
							더 나은 음악 교육을 위한 솔루션
						</p>
						<p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
							On-Lesson은 선생님과 학생 모두에게 최적화된 환경을 제공합니다.
						</p>
					</div>

					<div className="mt-10">
						<dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
							{[
								{
									title: "제한 없는 연결",
									description:
										"전국 어디서나 최고의 선생님과 연결될 수 있습니다. 물리적 거리의 한계를 넘어서세요.",
									icon: (
										<svg
											className="h-6 w-6"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
											/>
										</svg>
									),
								},
								{
									title: "유연한 스케줄",
									description:
										"당신의 일정에 맞춰 레슨을 예약하세요. 24/7 언제든지 가능합니다.",
									icon: (
										<svg
											className="h-6 w-6"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
											/>
										</svg>
									),
								},
								{
									title: "체계적인 커리큘럼",
									description:
										"개인화된 학습 계획과 진도 관리로 효율적인 학습을 경험하세요.",
									icon: (
										<svg
											className="h-6 w-6"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
											/>
										</svg>
									),
								},
								{
									title: "AI 지원 학습",
									description:
										"AI 기술을 활용한 레슨 녹음 분석과 요약으로 복습 효율을 극대화합니다.",
									icon: (
										<svg
											className="h-6 w-6"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M13 10V3L4 14h7v7l9-11h-7z"
											/>
										</svg>
									),
								},
							].map((feature, index) => (
								<motion.div
									key={feature.title}
									initial={{ opacity: 0, y: 20 }}
									animate={{
										opacity: isVisible ? 1 : 0,
										y: isVisible ? 0 : 20,
									}}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									className="relative"
								>
									<dt>
										<div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
											{feature.icon}
										</div>
										<p className="ml-16 text-lg leading-6 font-medium text-gray-900">
											{feature.title}
										</p>
									</dt>
									<dd className="mt-2 ml-16 text-base text-gray-500">
										{feature.description}
									</dd>
								</motion.div>
							))}
						</dl>
					</div>
				</div>
			</section>

			<section id="how-it-works" className="py-12 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="lg:text-center">
						<h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
							이용 방법
						</h2>
						<p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
							간단한 3단계로 시작하세요
						</p>
					</div>

					<div className="mt-10">
						<div className="flex flex-col md:flex-row justify-center items-center md:space-x-8">
							{[
								{
									step: 1,
									title: "회원가입",
									description: "간단한 정보 입력으로 계정을 만드세요.",
								},
								{
									step: 2,
									title: "선생님 선택",
									description: "다양한 선생님 중 나에게 맞는 분을 찾으세요.",
								},
								{
									step: 3,
									title: "레슨 시작",
									description: "편안한 환경에서 온라인 레슨을 받으세요.",
								},
							].map((item, index) => (
								<motion.div
									key={item.step}
									initial={{ opacity: 0, y: 20 }}
									animate={{
										opacity: isVisible ? 1 : 0,
										y: isVisible ? 0 : 20,
									}}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									className="flex flex-col items-center mb-8 md:mb-0"
								>
									<div className="flex items-center justify-center h-16 w-16 rounded-md bg-indigo-500 text-white text-2xl font-bold">
										{item.step}
									</div>
									<h3 className="mt-4 text-xl font-medium text-gray-900">
										{item.title}
									</h3>
									<p className="mt-2 text-base text-gray-500 text-center">
										{item.description}
									</p>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</section>

			<section id="pricing" className="py-12 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="lg:text-center">
						<h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
							가격
						</h2>
						<p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
							합리적인 가격으로 시작하세요
						</p>
						<p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
							학생과 선생님 모두에게 유리한 가격 정책을 제공합니다.
						</p>
					</div>

					<div className="mt-10 flex flex-wrap justify-center gap-8">
						{[
							{
								title: "학생 요금제",
								price: "₩30,000",
								description: "레슨 당 요금",
								features: [
									"1:1 맞춤 레슨",
									"AI 기반 학습 분석",
									"레슨 녹화본 제공",
								],
							},
							{
								title: "선생님 요금제",
								price: "₩50,000",
								description: "월 구독료",
								features: ["무제한 학생 수", "스케줄 관리 도구", "결제 자동화"],
							},
						].map((plan, index) => (
							<motion.div
								key={plan.title}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								className="bg-white shadow-lg rounded-lg overflow-hidden w-full md:w-96"
							>
								<div className="px-6 py-8">
									<h3 className="text-2xl font-semibold text-gray-900">
										{plan.title}
									</h3>
									<p className="mt-4 text-gray-500">{plan.description}</p>
									<p className="mt-2 text-5xl font-extrabold text-gray-900">
										{plan.price}
									</p>
									<ul className="mt-6 space-y-4">
										{plan.features.map((feature, featureIndex) => (
											<li key={featureIndex} className="flex items-start">
												<div className="flex-shrink-0">
													<svg
														className="h-6 w-6 text-green-500"
														xmlns="http://www.w3.org/2000/svg"
														fill="none"
														viewBox="0 0 24 24"
														stroke="currentColor"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth="2"
															d="M5 13l4 4L19 7"
														/>
													</svg>
												</div>
												<p className="ml-3 text-base text-gray-700">
													{feature}
												</p>
											</li>
										))}
									</ul>
								</div>
								<div className="px-6 py-8 bg-gray-50">
									<motion.button
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
										className="block w-full bg-indigo-600 text-white text-center px-4 py-2 rounded-md font-medium hover:bg-indigo-700"
									>
										시작하기
									</motion.button>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			<section className="py-12 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="lg:text-center">
						<h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
							후기
						</h2>
						<p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
							사용자들의 이야기
						</p>
					</div>

					<div className="mt-10">
						<div className="flex flex-wrap -m-4">
							{[
								{
									content:
										"On-Lesson 덕분에 원하는 선생님께 레슨을 받을 수 있게 되었어요. 거리 때문에 포기했던 꿈을 이룰 수 있게 되어 너무 기쁩니다!",
									name: "김지현",
									role: "학생",
								},
								{
									content:
										"학생 관리와 스케줄 조정이 훨씬 쉬워졌어요. 이제 레슨에만 집중할 수 있게 되었습니다.",
									name: "이상호",
									role: "기타 강사",
								},
							].map((testimonial, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 20 }}
									animate={{
										opacity: isVisible ? 1 : 0,
										y: isVisible ? 0 : 20,
									}}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									className="p-4 md:w-1/2 w-full"
								>
									<div className="h-full bg-white p-8 rounded shadow-lg">
										<svg
											className="block w-8 text-gray-400 mb-4"
											xmlns="http://www.w3.org/2000/svg"
											fill="currentColor"
											viewBox="0 0 975.036 975.036"
										>
											<path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
										</svg>
										<p className="leading-relaxed mb-6">
											{testimonial.content}
										</p>
										<a className="inline-flex items-center">
											<img
												alt="testimonial"
												src={`/placeholder.svg?height=106&width=106&text=${testimonial.name}`}
												className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
											/>
											<span className="flex-grow flex flex-col pl-4">
												<span className="title-font font-medium text-gray-900">
													{testimonial.name}
												</span>
												<span className="text-gray-500 text-sm">
													{testimonial.role}
												</span>
											</span>
										</a>
									</div>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
