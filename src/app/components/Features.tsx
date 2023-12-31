import Image from "next/image";
import { Feature } from "./Feature";

// food recomendation, chatbot, and nutritional value all look very similar
// i should make a component like a card to handle these three.

// the features layout might be a 5 col grid, with each card getting 1 col
// and the big text taking two cols

// additionally, there might be 5 rows, in which the big text part takes 3
// rows, leaving two empty. the food recomendation and nutritional value
// could also take the upper 3 rows, while chatbot takes the bottom 3.

export function Features() {
	return (
		<section className="pl-32 grid gap-2 grid-cols-2 2xl:grid-cols-5 grid-rows-5 h-[26rem]">
			<h3 className=" col-span-2 bg-gradient-blue-violet text-[2.125rem] font-black tracking-[.48rem] bg-clip-text text-transparent">
				FEATURES WE PROVIDE
			</h3>
			<div className="col-span-2 row-span-2 row-start-2 col-start-1 text-black font-bold  text-7xl">
				<p>
					Calculating BMI <br /> is easier
				</p>
				<div className=" translate-x-72 -translate-y-12">
					<Image
						src="/blueheart.png"
						height={57}
						width={52}
						alt="blue heart image"
					></Image>
				</div>
			</div>
			<div className="col-span-2 row-span-1 row-start-4 font-bold text-3xl text-zinc-500">
				We calculate your BMI index <br /> from data like age, height,
				weight.
			</div>
			<div className="col-start-3 row-start-1 row-end-5 flex flex-col justify-evenly">
				<Feature
					img="/diet.png"
					title="Food Recomendation"
					text="We provide food recomendation according to your calorie requirements."
				/>
			</div>
			<div className="col-start-4 row-start-4 row-end-5">
				<Feature
					img="/chatbot.png"
					title="Interactive Chatbot"
					text="Solve your queries by interacting with our bot."
				/>
			</div>
			<div className="col-start-5 col-end-5 row-start-1 row-end-4">
				<Feature
					img="/stats-2.png"
					title="Nutritional Value"
					text="Get all the nutritional values of your preferred dish."
				/>
			</div>
		</section>
	);
}
