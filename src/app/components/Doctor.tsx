import Image from "next/image";

export function Doctor() {
	return (
		<div className="w-full grid 2xl:grid-cols-2 grid-rows-5 pl-4 lg:pl-32 grid-cols-1 overflow-x-hidden">
			<div className="flex justify-center items-center w-fit col-span-1 row-start-1 h-16 mt-32 p-4 pl-8 bg-white bg-opacity-25 border border-zinc-400 rounded-full">
				<p className="text-neutral-600 font-bold text-3xl">
					Health Matters
				</p>
				<div className="w-16 h-10 relative">
					<Image
						src="/heart.svg"
						fill={true}
						alt="image of a heart"
					/>
				</div>
			</div>
			<div className="row-span-2 my-8 flex flex-col justify-evenly 2xl:whitespace-nowrap">
				<p className="text-blue-500 text-8xl font-bold ">
					One Step Solution
				</p>
				<span className="text-black text-8xl font-bold ">
					for all your dietary
				</span>
				<span className="text-black text-8xl font-bold ">needs.</span>
			</div>
			<div className="text-zinc-500 text-4xl font-bold leading-10">
				<p>Using your BMI index we calculate whether the</p>
				<p>dish is suitable for you.</p>
			</div>
			<div className="flex 2xl:w-auto w-4/5 justify-between items-center px-6 h-28 -translate-y-6 bg-neutral-100 rounded-3xl shadow-[2px_6px_4px_0px_rgba(144,139,139,0.40)]">
				<input
					type="text"
					placeholder="Search your product"
					className="bg-transparent text-neutral-600 text-opacity-80 h-4/5 pl-6 outline-none text-3xl font-medium"
				></input>
				<div className="flex gap-5">
					<div className="w-20 h-20 bg-gradient-blue-violet rounded-full relative items-center flex justify-center">
            <Image src="/landscape.svg" alt="landscape icon" height={44} width={44} className=""></Image>
          </div>
					<div className="w-20 h-20 bg-gradient-blue-violet rounded-full relative items-center flex justify-center">
            <Image src="/microphone.svg" alt="microphone icon" height={44} width={44} className=""></Image>
          </div>
					<div className="w-20 h-20 bg-gradient-blue-violet rounded-full relative items-center flex justify-center">
            <Image src="/magnifying-glass.svg" alt="magnifying glass icon" height={44} width={44} className=""></Image>
          </div>
				</div>
			</div>
			<section className="hidden 2xl:scale-100 2xl:block h-full col-start-2 row-span-full relative">
				<img
					src="/doctor.png"
					className="absolute translate-x-18 -right-72 z-20 -scale-x-100 h-full object-fill max-w-fit"
				></img>
				<Image
					src="/ellipse1.svg"
					height={252}
					width={252}
					alt="cosmetic blue splash"
					className="absolute top-[24%] left-[40%] bg-center z-10 bg-indigo-500 rounded-full blur-3xl"
				/>
			</section>
		</div>
	);
}
