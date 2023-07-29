import Image from "next/image";

export function Header() {
	return (
		<header className="px-32 w-full flex justify-between items-center pt-20">
			<section className="flex items-center justify-between gap-8 h-full">
				<div className="w-20 h-16 relative">
					<Image src="/logo.png" fill={true} alt="Logo" />
				</div>
				<div className="relative h-16 font-black bg-gradient-blue-violet text-transparent bg-clip-text">
					<h2 className="text-5xl inline-block leading-[1.3]">
						HealthyMe
					</h2>
					<div className="w-8 h-8 -right-6 -top-2 absolute bg-gradient-to-r from-blue-500 to-violet-600 rounded-full shadow-inner">
						<div className="w-2 h-5 left-[50%] top-[50%] absolute bg-white rounded-sm -translate-x-2/4 -translate-y-1/2"></div>
						<div className="w-2 h-5 left-[50%] top-[50%] -translate-x-2/4 -translate-y-2/4 absolute rotate-90 bg-white rounded-sm"></div>
					</div>
				</div>
			</section>

			<nav className="flex h-full gap-9 transition duration-300 ease-in-out">
				<div className="justify-start items-center gap-12 flex min-h-full cursor-pointer">
					<div className="group inline">
						<div className="h-full group-hover:relative text-neutral-700 text-2xl hover:font-bold font-medium">
							Home
						</div>
						<div className="hidden group-hover:block w-16 h-px left-[3px] top-[7px] relative opacity-30 border border-blue-700"></div>
					</div>
					<div className="group inline">
						<div className="h-full group-hover:relative text-neutral-700 text-2xl hover:font-bold font-medium">
							About Us
						</div>
						<div className="hidden group-hover:block w-16 h-px left-[50%] top-[7px] -translate-x-1/2 relative opacity-30 border border-blue-700"></div>
					</div>
					<div className="group inline">
						<div className="h-full group-hover:relative text-neutral-700 text-2xl hover:font-bold font-medium">
							How to use
						</div>
						<div className="hidden group-hover:block w-16 h-px left-[50%] top-[7px] -translate-x-2/4 relative opacity-30 border border-blue-700"></div>
					</div>
				</div>
				<button className="w-52 h-16 bg-gradient-blue-violet rounded-2xl text-white text-3xl font-black">
					Log In
				</button>
			</nav>
		</header>
	);
}
