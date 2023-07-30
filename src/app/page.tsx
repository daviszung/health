import { Header } from "./components/Header";
import { Doctor } from "./components/Doctor";
import { Features } from "./components/Features";

export default function Home() {
	return (
		<div className="bg-violet-50 h-full shadow font-sans">
			<Header></Header>
			<Doctor></Doctor>
			<Features></Features>
		</div>
	);
}
