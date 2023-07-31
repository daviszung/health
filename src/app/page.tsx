import { Header } from "./components/Header";
import { Doctor } from "./components/Doctor";
import { Features } from "./components/Features";
import { Topic } from "./components/Topic";
import { Carousel } from "./components/Carousel";
import { Product } from "./components/Product";

export default function Home() {
	return (
		<div className="bg-violet-50 h-full shadow font-sans">
			<Header />
			<Doctor />
			<Features />
			<Topic />
			<Carousel>
				<Product
					img="/pizzapie.jpg"
					title="Pizza Pie"
					text="Lorem ipsum amet dolor, etit tu"
				/>
				<Product
					img="/pizzapie.jpg"
					title="Pizza Pie"
					text="Lorem ipsum amet dolor, etit tu"
				/>
				<Product
					img="/pizzapie.jpg"
					title="Pizza Pie"
					text="Lorem ipsum amet dolor, etit tu"
				/>
				<Product
					img="/pizzapie.jpg"
					title="Pizza Pie"
					text="Lorem ipsum amet dolor, etit tu"
				/>
				<Product
					img="/pizzapie.jpg"
					title="Pizza Pie"
					text="Lorem ipsum amet dolor, etit tu"
				/>
			</Carousel>
			<Carousel>
				<Product
					img="/pizzapie.jpg"
					title="Pizza Pie"
					text="Lorem ipsum amet dolor, etit tu"
				/>
				<Product
					img="/pizzapie.jpg"
					title="Pizza Pie"
					text="Lorem ipsum amet dolor, etit tu"
				/>
				<Product
					img="/pizzapie.jpg"
					title="Pizza Pie"
					text="Lorem ipsum amet dolor, etit tu"
				/>
				<Product
					img="/pizzapie.jpg"
					title="Pizza Pie"
					text="Lorem ipsum amet dolor, etit tu"
				/>
				<Product
					img="/pizzapie.jpg"
					title="Pizza Pie"
					text="Lorem ipsum amet dolor, etit tu"
				/>
			</Carousel>
		</div>
	);
}
