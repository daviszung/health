
import Image from "next/image"

export function Doctor(){
  
  return (
		<div className="w-full grid 2xl:grid-cols-2 grid-rows-5 pl-32 grid-cols-1 overflow-x-hidden">
			<div className="flex justify-center items-center w-fit col-span-1 row-start-1 mt-32 p-4 pl-8 bg-white bg-opacity-25 border border-zinc-400 rounded-full">
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
				<p className="text-blue-600 text-8xl font-bold ">
					One Step Solution
				</p>
				<span className="text-black text-8xl font-bold ">
					for all your dietary
				</span>
				<span className="text-black text-8xl font-bold ">needs.</span>
			</div>
			<div className="w-full text-zinc-500 text-4xl font-bold leading-10">
        <p>Using your BMI index we calculate whether the</p>
        <p>dish is suitable for you.</p>
			</div>
      <div>

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
};
