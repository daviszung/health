import { Header } from "./components/Header";
import { Doctor } from "./components/Doctor";

export default function Home() {
	return (
		<div className="bg-violet-50 h-full shadow font-sans">
			<Header></Header>
			<Doctor></Doctor>
		</div>
	);
}
